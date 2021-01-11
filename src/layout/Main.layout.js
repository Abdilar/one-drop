import React from "react"
import style from "./Main.module.scss"
class MainLayout extends React.Component{

    componentDidMount() {
        document.body.classList.add("zoom");
    }
    componentWillUnmount() {
        document.body.classList.remove("zoom");
    }

    render() {
        return (
            <React.Fragment>
                <div className={style.container}>
                    <div className={style.container__wrapper} id="canvas-container">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainLayout
