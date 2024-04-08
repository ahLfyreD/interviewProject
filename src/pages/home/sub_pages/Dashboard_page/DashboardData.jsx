import Logo2 from '../../../../assets/logo2.svg'
import People from '../../../../assets/people.svg'
import Bag from '../../../../assets/bag.svg'
import list from '../../../../assets/list.svg'
import cart from '../../../../assets/cart.svg'

export const DashBoardData = [
    {
        "id": 1,
        "icon": Logo2,
        "item": [
            {
                "id": 11,
                "title": "Sales",
                "valueNumber": "N4,000,000.00"
            },
            {
                "id": 12,
                "title": "Volume",
                "valueNumber": "450",
                "percentage": "+20.00%"
            }
        ]
    },
    {
        "id": 2,
        "icon": People,
        "item": [
            {
                "id": 21,
                "title": "Customer",
                "valueNumber": "1,250",
                "percentage": "+15.80%"
            },
            {
                "id": 22,
                "title": "Active",
                "valueNumber": "1,180",
                "percentage": "+85%"
            }
        ]
    },
    {
        "id": 3,
        "icon": Bag,
        "item": [
            {
                "id": 31,
                "title": "All Orders",
                "valueNumber": "450"
            },
            {
                "id": 32,
                "title": "Pending",
                "valueNumber": "5"
            },
            {
                "id": 33,
                "title": "Completed",
                "valueNumber": "445"
            },
        ]
    }
]

export const Product = [
    {
        "id": 4,
        "icon": list,
        "item": [
            {
                "id": 41,
                "title": "All Products",
                "valueNumber": "45"
            },
            {
                "id": 42,
                "title": "Active",
                "valueNumber": "32",
                "percentage": "+24%"
            }
        ]
    }
]

export const Customer = [
    {
        "id": 5,
        "icon": cart,
        "item": [
            {
                "id": 51,
                "title": "Abandoned cart",
                "valueNumber": "20%",
                "percentage": "0.00%"
            },
            {
                "id": 52,
                "title": "Customers",
                "valueNumber": "30"                
            }
        ]
    }
]

export const Chart = [
    {
        "id": 6,
        "rate": "90%",
        "month": "Sept 10"
    },
    {
        "id": 7,
        "rate": "40%",
        "month": "Sept 11"
    },
    {
        "id": 8,
        "rate": "65%",
        "month": "Sept 12"
    },
    {
        "id": 9,
        "rate": "25%",
        "month": "Sept 13"
    },
    {
        "id": 10,
        "rate": "80%",
        "month": "Sept 14"
    },
    {
        "id": 11,
        "rate": "45%",
        "month": "Sept 15"
    },
    {
        "id": 12,
        "rate": "80%",
        "month": "Sept 16"
    },
]