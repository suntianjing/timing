var Mock = require('mockjs')

var data = Mock.mock({
    'arr|10':[
        {
            'name':'@cname()'   
        }
    ]
})

console.log(data)