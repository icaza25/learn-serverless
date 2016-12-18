'use strict';

class BlogsRepository {
    // TODO: Assign DynamoDbDataAccessService instance into constructor's parameter

    /**
    * A helper for retrieving a list of posted blogs
    */
    retrieveBlogs(numberOfItems){
        // TODO: Replace these hardcoded values by calls 
        //       which retrieve the values from AWS Data Storage services (e.g. SimpleDB, DynamoDB)
        const result = [{
            title: 'My 1st Post',
            categories: 'General',
            content: 'Lorem ipsum dolor sit amet, \
                    consectetur adipiscing elit.'
        },{
            title: 'My 2nd Post',
            categories: 'General',
            content: 'Nam posuere eu enim id hendrerit. \
                    Donec gravida elit nec dui mattis mollis. \
                    Donec hendrerit augue vitae orci rhoncus pulvinar.'
        },{
            title: 'My 3rd Post',
            categories: 'General',
            content: 'Sed non sapien justo. Praesent non sem convallis, \
                    volutpat nulla in, volutpat justo. \
                    Aenean eget nunc malesuada, rhoncus dui nec, vehicula mauris.'
        }];

        return result;        
    }
}

module.exports = BlogsRepository;