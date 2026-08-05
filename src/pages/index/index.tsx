import './index.css'

import topbgIcon from "../../assets/img/bg-top.svg"
import bottombgIcon from "../../assets/img/bg-bottom.svg"

export const SecPriceCard = (): React.JSX.Element => {
    return(<>
    </>)
}

export const Index = (): React.JSX.Element => {
    return (<>
        <div className='div-index-context'>
            <h1 className='h1-index-title'>Our Pricing</h1>
            <div className='div-plancicle-block flex-row-stlye'>
                <h2 className='h2-plancycle-style'>Anually</h2>
                <div className='div-switch-cicle'></div>
                <h2 className='h2-plancycle-style'>Monthly</h2>
            </div>
            <div className='div-plancards-context flex-row-style'>
                <SecPriceCard />
                <div className='div-middlecard-context'></div>
                <SecPriceCard />
            </div>
            <img className='img-topbg-icon img-background-design-style img-centered-style' src={topbgIcon} />
            <img className='img-bottombg-icon img-background-design-style img-centered-style' src={bottombgIcon}/>
        </div>
    </>)
}