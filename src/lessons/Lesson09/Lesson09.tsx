
import './styles.css'
import Avatar from '../../assets/avatar.jpg'

// 3 способ стилизации - импортируем стилизованные компоненты emotion
import { BoxInfo, TitleCard,AvatarImg } from './styles';
function Lesson09 (){

    const textStyles = {color: 'burlywood', fontSize: '28px'}
    return(
        <div className="lesson09-container">
            <h1>Styling component</h1>
            <div style={{color: 'blueviolet', fontSize: '24px'}}>Inline styles component</div>

            <p style={textStyles}>Inline styles example 1</p>
            <div style={textStyles}>Inline styles example 2</div>
   {/* 3 способ стилизации - использование стилизованных компонентов emotion */}
            {/* <BoxInfo primary={true}>Emotion exmpale 1</BoxInfo>
            <BoxInfo primary={false}>Emotion example 2</BoxInfo> */}
            <BoxInfo primary={true}>
                <TitleCard>Marta</TitleCard>
                <AvatarImg src={Avatar}/>
            </BoxInfo>
            <BoxInfo>Emotion example 2</BoxInfo> 

        </div>
    )
}

export default Lesson09;