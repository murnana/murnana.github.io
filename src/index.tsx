import * as React from "react";
import * as ReactDOM from "react-dom";
import { Docs } from "./docs";

window.addEventListener('load', () => {
    ReactDOM.render(
        <Main />,
        document.getElementById('app'),
    );
});


class Main extends React.Component<Main.Props, Main.States> {

    constructor(props: Main.Props) {
        super(props);
        this.state = {
            htmlPath: './docs/index.html',
        };
    }

    public render() {
        return (
            <div>
                <Docs
                    htmlPath = {this.state.htmlPath}
                    onChangeDocs = {(path: string) => {
                        this.setState({
                            htmlPath: path,
                        });
                    }}
                />
            </div>
        );
    }

}


namespace Main {
    export interface Props {
    }

    export interface States {
        htmlPath: string;
    }
}
