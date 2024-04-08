import { Product } from "../DashboardData"

const ProductDataComponent = () => {
    return (
        <>
            {Product.map((items, index) => {
                return (
                    <div className='content_box' key={index} style={{ backgroundColor: '#5570F1' }}>
                        <div style={{ height: '100%', padding: 15, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <img src={items.icon} alt="" />
                            </div>
                            <div style={{ display: 'flex', gap: 30 }}>
                                {items.item.map((items, index) => {
                                    return (
                                        <div key={index} style={{width: 130}}>
                                            <span style={{fontSize: '14px', color: 'white', fontWeight: 400, fontFamily: 'inter'}}>
                                                {items.title}
                                            </span>
                                            <div>
                                                <span style={{fontSize: '20px', color: 'white', fontWeight: 400, fontFamily: 'poppins'}}>
                                                    {items.valueNumber}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProductDataComponent
