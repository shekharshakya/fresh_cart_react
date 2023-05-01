import React, { useState } from 'react'

const FilterTabs = () => {
    const {filterBtns, setFilterBtn} = useState(true);

    const filterBtn = (text) =>{
        console.log(text)
    }

    return (
        <section className='filter-tab sec-padding'>
            <div className="container">
                <div className="filter-area">
                    <div className="filter-btns">
                        <button type="button" data-filter-btn="Product Details" onClick={()=>filterBtn("Product Details")} className={filterBtns ? "active" : ""}>
                            Product Details
                        </button>
                        <button type="button" data-filter-btn="Information" onClick={()=>filterBtn("Information")} className={filterBtns ? "active" : ""}>
                            Information
                        </button>
                        <button type="button" data-filter-btn="Reviews" onClick={()=>filterBtn("Reviews")} className={filterBtns ? "active" : ""}>
                            Reviews
                        </button>
                        <button type="button" data-filter-btn="Seller Info" onClick={()=>filterBtn("Seller Info")} className={filterBtns ? "active" : ""}>
                            Seller Info
                        </button>
                    </div>
                    <div className="filter-box">
                        <div className="filter-items active" data-target-filter="Product Details">Product Details</div>
                        <div className="filter-items" data-target-filter="Information">Information</div>
                        <div className="filter-items" data-target-filter="Reviews">Reviews</div>
                        <div className="filter-items" data-target-filter="Seller Info">Seller Info</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FilterTabs