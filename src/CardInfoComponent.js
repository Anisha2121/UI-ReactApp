import React from 'react'
import './MobileScreen.css';

function CardComponentAccToSize(props) {
    const {title, size} = props;

    if(size === 'lg') {
        return (
            <div className='tileOne' onClick={props.click}>
                <div className='icon'>
                    {
                        props.icon && <props.icon size={40} color='red'/>
                    } 
                </div>
                <div className='title'>{title}</div>
            </div>
        )
    } else if(size === 'sm') {
        return (
            <div className='tileTwo'>
                <div className='icon'>
                    {
                    props.icon && <props.icon size={30} color='red'/>
    }
                    </div>
                <div className='titleSmall'>{title}</div>
            </div>
        )
    }
}

export default function CardInfoComponent(props) {
    const {title, size, icon} = props;

    const handleClick = () => {
        props.open(true);
    }
  return (
    <CardComponentAccToSize size={size} title={title} icon={icon} click={handleClick}/>

  )
}
