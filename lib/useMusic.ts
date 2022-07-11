import { computed, ComputedRef, ref, Ref } from "reactivue";
import * as Tone from 'tone';
// import a1 from '../assets/melody1.mp3';

// const samplerSynthsMap: SamplesMapType = {
//     a1: 
// };

let samplerSynth: Tone.Sampler | null = null;

type SamplesMapType = {[key: string]: string};
type UseSynthType = {
    noteRef: Ref<string>;
    run: (newNote?: string) => number;
    interId?: number;
    cancel: (note?: string | undefined) => void;
    playing: ComputedRef<boolean>
}

export const DEFAULT_AUDIO_DURATIOM = 10000;

function init() {

    samplerSynth = new Tone.Sampler({
        urls: samplerSynthsMap,
        release: 0,
        baseUrl: '',
        onload: () => {
            isLoaded.value = true;
        },
    }).toDestination();
}

export function useSynthLoop(time = DEFAULT_AUDIO_DURATIOM): UseSynthType {
    const timeoutId = ref(0);
    const interId = ref(0);
    const noteRef = ref('');
    const run = (newNote = '') => {
        cancel(noteRef.value);
        noteRef.value = newNote || noteRef.value;
        if (!noteRef.value) return 0;
    samplerSynth?.triggerAttack(noteRef.value);
    const id = setTimeout(() => {
      samplerSynth?.triggerRelease(noteRef.value);
    }, time) as unknown as number;
    interId.value = setInterval(() => {
        run();
    }, time) as unknown as number;
    timeoutId.value = id;
    return timeoutId.value;
    };

    function cancel(note: string | undefined = '') {
        if (!samplerSynth) return;

        if (note) {
            samplerSynth.triggerRelease(note);
        } else {
            samplerSynth.triggerRelease(noteRef.value);
            noteRef.value = '';
        }
        clearInterval(interId.value);
        interId.value = 0;
        clearTimeout(timeoutId.value);
        timeoutId.value = 0;
    }

    const playing = computed(() => timeoutId.value > 0);

    return {
        noteRef,
        run,
        interId: interId as unknown as number,
        cancel,
        playing,
    };
}
