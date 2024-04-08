import { DashBoardData } from "../DashboardData"

const TopComponent = () => {
    return (
        <div className='first_container'>
            {DashBoardData.map((items, index) => {
                return (
                    <div className='content_box' key={index}>
                        <div style={{ height: '100%', padding: '0 10px 10px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <img src={items.icon} alt="" />
                                <div style={{fontSize: '12px', color: '#BEC0CA', fontWeight: 400, fontFamily: 'inter'}}>
                                    <span>This Week</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 30}}>
                                {items.item.map((items, index) => {
                                    return (
                                        <div key={index} style={{width: 130}}>
                                            <span style={{fontSize: '14px', color: '#BEC0CA', fontWeight: 400, fontFamily: 'inter'}}>
                                                {items.title}
                                            </span>
                                            <div>
                                                <span style={{fontSize: '20px', fontWeight: 400, fontFamily: 'poppins'}}>
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
        </div>
    )
}

export default TopComponent
