import {AvatarComponent, TypographyComponent, BoxComponent, StackComponent, TopComponent} from "../..";
import logo from '../../../assets/logo/logo.png';

const AuthTopComponent = ({title_page, subtitle_page}) => {
    return <BoxComponent>
                <BoxComponent  sx={{ml: 6, mt: 6}}>
                    <TopComponent hasBubble={true} title={'MyTasks'} subtitle={'Organize suas ideias...'}/>
                </BoxComponent>
                <StackComponent alignItems={"center"}>
                    <AvatarComponent 
                        sx={{ width: '70%', height: 'auto', mt: 4 }} 
                        src={logo} 
                        alt={'Logo'}/>
                </StackComponent>
                <StackComponent sx={{mt: 4, mb: 4}}>
                    <TypographyComponent variant={'p'} sx={{
                        textAlign: 'center',
                        fontSize: '1.6rem !important'
                    }}>
                        {title_page}
                    </TypographyComponent>
                    <TypographyComponent variant={'p'} sx={{
                        textAlign: 'center',
                        fontSize: '1.1rem !important'
                    }}>
                        {subtitle_page}
                    </TypographyComponent>
                </StackComponent>
            </BoxComponent>
}

export default AuthTopComponent;