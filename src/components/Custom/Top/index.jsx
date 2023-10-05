import {BoxComponent, TopMenuComponent, TypographyComponent} from "../../"

const Top = ({ title, subtitle, hasMenu, hasArrowBack, hasImage, hasBubble }) => {
    return (
        <BoxComponent>
            <TopMenuComponent hasMenu={hasMenu} hasArrowBack={hasArrowBack} hasImage={hasImage}/>
            <TypographyComponent variant="h1" component="h1" sx={{
                fontSize: "3rem",
            }}>
                {title}
            </TypographyComponent>
            <TypographyComponent variant="h6" component="h6">
                {subtitle}
            </TypographyComponent>
            { hasBubble ? <>
                <div style={{
                    background: "#00373F",
                    width: "300px",
                    height: "300px",
                    position: "fixed",
                    right: "-180px",
                    top: '-180px',
                    borderRadius: "100%",
                    zIndex: "-1",
                }}/>
                <div style={{
                    background: "#006876",
                    width: "160px",
                    height: "150px",
                    position: "fixed",
                    left: "-65px",
                    bottom: '-85px',
                    borderRadius: "100%",
                    zIndex: "-1",
                }}/>
            </> : null}
        </BoxComponent>
    )
}

Top.defaultProps = {
    hasMenu: false, 
    hasArrowBack: false, 
    hasImage: false,
    hasBubble: false
}

export default Top;