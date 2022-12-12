import { manifest } from './typing/types';

export default class Manifest implements manifest {
    public manifest_version: 3 = 3;
    public constructor() {}
    public get name() {
        return '';
    }

    public get version() {
        return '';
    }

    public toJSON() {
        return JSON.stringify(this);
    }
}
