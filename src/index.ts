import { getListen, setListen } from './eventList';

export const on: onEmit.on = ({ listenName, sourceName, listenFn }) => {
    return new Promise((resolve: any, reject: any) => {
        setListen({ listenName, sourceName, listenFn })
            .then((res: any) => {
                resolve(res);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
};

export const emit: onEmit.emit = ({ emitName, emitParams }) => {
    return new Promise((resolve: any, reject: any) => {
        const emitList: any = getListen(emitName);
        try {
            emitList[emitName].forEach(({ emitFn, sourceName }: any) => {
                emitFn && emitFn(emitParams, sourceName)
            });
            resolve({
                state: true,
                emitName,
            })
        }
        catch (e) {
            reject({
                state: false,
                emitName,
                error: e,
            })
        }
    })
};

export const removeListener: listenTS.removeListener = ({ listenName, sourceName }) => {
    return new Promise((resolve: any, reject: any) => {

    })
};

