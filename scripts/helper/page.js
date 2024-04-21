"use strict";
const { stripHTML, escapeHTML } = require('hexo-util')
hexo.extend.helper.register('page_description', function () {
    const { config, page } = this
    let description =  page.description || page.content || page.title || config.description

    if (description) {
        description = escapeHTML(stripHTML(description).substring(0, 150)
            .trim()
        ).replace(/\n/g, ' ').replace(/\s+/g, ' ');
        return description
    }
})

// 藏宝阁星星
hexo.extend.helper.register('toStar', function(num) {
    let tmp = ''
    for (let i = 0; i < Math.floor(num); i++) { tmp += '<i class="fa-solid fa-star"></i>' } // 整数部分加 实心星星
    if (num - Math.floor(num) != 0) tmp += '<i class="fa-solid fa-star-half-alt"></i>' // 小数部分转成 半星
    for (let i = 0; i < 5 - Math.ceil(num); i++) { tmp += '<i class="fa-regular fa-star"></i>' } // 不够5个补 空心星星
    return tmp
})