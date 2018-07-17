import * as React from "react";
import { HTMLFile } from "./common/html";

/**
 * ドキュメントクラス
 */
export class Docs extends React.Component<Docs.Props, Docs.States> {
    constructor(props: Docs.Props) {
        super(props);
        const paths = (/^(((.*\/)?.*(\/.*)?)|(.*\..*))$/gm).exec(props.htmlPath);
        const dir = (paths ? (paths.length > 2 ? paths[3] : './' ) : './');
        this.state = {
            html: HTMLFile.parse('Loading...', 'p'),
            dir: dir,
        };
        HTMLFile.load(props.htmlPath)
            .then((value: string) => {
                const text = value.replace(
                    /(href|src)="([^\#][^\/)][^\":]+)"/mg,
                    `$1="${dir}$2"`);
                const htmlElement = HTMLFile.parse(text, 'html');
                this._chengeAnchorElements(htmlElement);

                this.setState({
                    html: htmlElement,
                });
            })
            .catch((value: any) => {
                console.error(value);
                this.setState({
                    html: HTMLFile.parse(value, 'p'),
                });
            });
    }

    /**
     * render
     */
    public render() {
        return (<div dangerouslySetInnerHTML={{
            __html: this.state.html.innerHTML
        }} />);
    }

    /**
     * <a>タグ内のhrefを変更します
     * onClick()でページデータを読み込むよう変更します
     * @param start 
     */
    private _chengeAnchorElements(start: Element) {
        const reactElement = React.createElement(start.tagName, start, start.children);
        console.log(reactElement.props);
        const anchorElementList = reactElement.props.getElementsByTagName('a');
        for(let i = 0; i < anchorElementList.length; ++i) {
            const anchorElement = anchorElementList.item(i);
            const href = anchorElement.href;
            const regexp = new RegExp(`^(?=${location.href})^(?!.*#.*).*$`);
            const test = regexp.test(href);
            if(!test) continue;
            anchorElement.href = '#';
            anchorElement.addEventListener('click',() => this.props.onChangeDocs(href));
        }
        for (let i = 0; i < start.children.length; ++i ){
            const children = start.children[i];
            this._chengeAnchorElements(children);
        }
    }
};

export namespace Docs {
    export interface Props {
        htmlPath: string;
        onChangeDocs: (htmlPath: string) => void;
    }

    export interface States {
        dir: string;
        html: HTMLElement;
    }
}
