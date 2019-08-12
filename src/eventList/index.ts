const listenList: listenTS.listenList = {};

export const getListen: listenTS.getListen = (listenName) => {
    return listenName ?
        (listenName in listenList) ?
            { [listenName]: listenList[listenName] }
            :
            {}
        :
        listenList;
};

export const setListen: listenTS.setListen = ({ listenName, sourceName = 'unknow', listenFn }) => {
    return new Promise((resolve: any, reject: any) => {
        try {
            listenList[listenName] ?
                listenList[listenName].push({
                    emitFn: listenFn,
                    sourceName,
                })
                :
                listenList[listenName] = [
                    {
                        emitFn: listenFn,
                        sourceName,
                    },
                ];
            resolve({
                state: true,
                sourceName,
                listenName,
            });
        }
        catch (error) {
            reject({
                state: false,
                sourceName,
                listenName,
                error,
            });
        }
    })
};
export const removeListener: listenTS.removeListener = ({ listenName, sourceName}) => {
    return new Promise((resolve: any, reject: any) => {

    })
};

