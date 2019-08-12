declare namespace listenTS {
    type listenList = {
        [key: string]: {
            emitFn: () => void,
            sourceName: string,
        }[]
    }
    type getListen = (listenName:string) => listenList;
    type setListen = ({ listenName, sourceName, listenFn }: { listenName: string, sourceName?: string, listenFn: () => void }) => Promise<any>;

    type removeListener = ({ listenName, sourceName }: { listenName: string, sourceName?: string }) => Promise<any>;

    type removeAllListener = () => Promise<any>;
}

declare namespace onEmit {
    type on = ({ listenName, sourceName, listenFn }: { listenName: string, sourceName: string, listenFn: () => void }) => Promise<any>;
    type emit = ({ emitName, emitParams }: { emitName: string, emitParams: { [key: string]: any } }) => Promise<any>;
}

