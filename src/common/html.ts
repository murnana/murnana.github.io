export namespace HTMLFile {

    /**
     * HTMLファイルの読み込み
     * @param path htmlパス
     */
    export async function load(path: string) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', path, true);
        return await new Promise<string>((resolve, reject) => {
            xmlHttp.onreadystatechange = () => {
                if (xmlHttp.readyState != 4) return;
                if (xmlHttp.status == 200) {
                    return resolve(xmlHttp.responseText);
                }
                return reject(xmlHttp.statusText);
            };
            xmlHttp.onerror = () => {
                reject(xmlHttp.statusText);
            };
            xmlHttp.send(null);
        });
    }

    export function parse<T extends keyof HTMLElementTagNameMap>(value: string, tagName: T) : HTMLElementTagNameMap[T]{
        const element = document.createElement(tagName);
        element.innerHTML = value;
        return element;
    }
}
