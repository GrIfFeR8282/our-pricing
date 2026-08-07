import './index.css'

import topbgIcon from "../../assets/img/bg-top.svg"
import bottombgIcon from "../../assets/img/bg-bottom.svg"

import { useState } from 'react'

type seccardinfo = {planName: string, price: string, desc1: string, desc2: string, desc3: string}

export const SecPriceCard = ({planName, price, desc1, desc2, desc3}: seccardinfo): React.JSX.Element => {
    return(<>
        <div className='div-secpricecard-context flex-column-style'>
            <h2 className='h2-pricecard-planname-display'>{planName}</h2>
            <h1 className='h1-secpricecard-price-display no-margin-style'><span className='span-price-display-currency-logo'>$</span>{price}</h1>
            <div className='div-planbenefits-table flex-column-style'>
                <h1 className='h1-planbenefits-benefit-style'>{desc1}</h1>
                <h1 className='h1-planbenefits-benefit-style'>{desc2}</h1>
                <h1 className='h1-planbenefits-benefit-style'>{desc3}</h1>
            </div>
            <button className='button-pricecard-learnmore button-default-style' type="button">LEARN MORE</button>
        </div>
    </>)
}

export const Index = (): React.JSX.Element => {
    const [isannually, setisannually] = useState<Boolean>(false)
    const [ishandlingcycle, setishandlingcycle] = useState<Boolean>(false)
    const handleswitchcycle = ():void => {
        if (!ishandlingcycle) {
            setishandlingcycle(true)
            setisannually(a => !a)
            setTimeout(() => setishandlingcycle(false), 1000);
        }
    }
    return (<>
        <div className='div-index-context flex-column-style'>
            <h1 className='h1-index-title'>Our Pricing</h1>
            <div className='div-plancicle-block flex-row-style'>
                <h2 className='h2-plancycle-style'>Anually</h2>
                <div onClick={() => handleswitchcycle()} className={`div-switch-cycle ${isannually ? "div-switch-cycle-active" : ""}`}></div>
                <h2 className='h2-plancycle-style'>Monthly</h2>
            </div>
            <div className='div-plancards-context flex-row-style'>
                <SecPriceCard 
                planName='Basic'
                price={isannually ? "199.99" : "19.99"}
                desc1='500 GB Storage'
                desc2='2 Users Allowed'
                desc3='Send up to 3 GB'
                />
                <div className='div-middlecard-context'></div>
                <SecPriceCard 
                planName='Master'
                price={isannually ? "399.99" : "39.99"}
                desc1='2 TB Storage'
                desc2='10 Users Allowed'
                desc3='Send up to 20 GB'
                />
            </div>
            <img className='img-topbg-icon img-background-design-style img-centered-style' src={topbgIcon} />
            <img className='img-bottombg-icon img-background-design-style img-centered-style' src={bottombgIcon}/>
        </div>
    </>)
}