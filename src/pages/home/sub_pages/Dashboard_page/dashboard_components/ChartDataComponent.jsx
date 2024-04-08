import { Chart } from "../DashboardData"

const ChartDataComponent = () => {
    return (
        <div className='data_analysis'>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ margin: '0px 20px 0px 0px', fontSize: '16px', color: '#45464E', fontWeight: 500, fontFamily: 'inter' }}>Summer</p>
                        <div style={{ fontSize: '14px', color: '#BEC0CA', fontWeight: 400, fontFamily: 'inter' }}>
                            <span>Sales</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#1C1D22', fontWeight: 400, fontFamily: 'inter' }}>
                        <span>Last 7 days</span>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex' }}>
                    <div style={{ height: 213, }}>
                        <ul style={{ height: '100%', fontSize: '11px', display: 'flex', color: '#BEC0CA', fontWeight: 400, fontFamily: 'inter', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <li>100k</li>
                            <li>80k</li>
                            <li>60k</li>
                            <li>40k</li>
                            <li>20k</li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                        {Chart.map((items, index) => {
                            return (
                                <div style={{ width: 40, height: 273 }} key={index}>
                                    <div style={{ margin: '0 auto', height: 241, width: 13, borderRadius: 50, display: 'flex', flexDirection: 'column', justifyContent: 'end', background: '#f4f5fa' }}>
                                        <div style={{ width: '100%', height: `${items.rate}`, borderRadius: 50, backgroundColor: '#5570F1' }}></div>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <span style={{ fontSize: '11px', color: '#BEC0CA', fontWeight: 400, fontFamily: 'inter' }}>{items.month}</span>
                                    </div>

                                </div>
                            )
                        })}

                    </div>


                </div>

            </div>
        </div>
    )
}

export default ChartDataComponent
