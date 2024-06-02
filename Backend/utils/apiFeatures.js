class APIFeatures
{
    constructor(query,queryStr)
    {
        this.query=query;
        this.queryStr=queryStr;
    }

    search() {
        let keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i' //case insensitive
            }
        } : {};
        this.query = this.query.find({...keyword}); // Update this.query
        return this;
    }
    
    filterbyCategory() {
        let querystr2 = {...this.queryStr};
        const removeFields = ['keyword', 'limit', 'page'];
    
        removeFields.forEach(field => delete querystr2[field]);
        console.log(querystr2);
        this.query = this.query.find(querystr2); // Update this.query
        return this;
    }
    
    paginationFeature(resultPerPage) {
        console.log(Number(this.queryStr.page))
        const curr_page = Number(this.queryStr.page) || 1;
        let skip = resultPerPage * (curr_page - 1);
    
        this.query = this.query.limit(resultPerPage).skip(skip); // Update this.query
        return this;
    }
    
}

module.exports=APIFeatures;