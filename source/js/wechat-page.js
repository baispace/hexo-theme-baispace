const oa_name = "白贺BaiHe";
        const oa_description = "分享大数据知识与生活感悟";
        const web_beian = "京ICP备18004887号";
function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('web-beian', web_beian)

// 改进vh
const vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 1;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', (event) => {
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const replyText = urlParams.get('replyText');

  // 检测是否有replyText参数
  if (replyText) {
      // 如果有参数，则更新wechat-need-reply-text的内容
      document.getElementById('wechat-need-reply').style.display = 'flex';
      document.getElementById('wechat-need-reply-text').textContent = replyText;
  } else {
      // 如果没有参数，则隐藏wechat-need-reply部分
      document.getElementById('wechat-need-reply').style.display = 'none';
  }

  document.getElementById('wechat-need-reply-copybtn').addEventListener('click', function() {
      var textToCopy = document.getElementById('wechat-need-reply-text').innerText;
      navigator.clipboard.writeText(textToCopy).then(function() {
          console.log('Text copied to clipboard');
          // Change the text and color of wechat-need-reply-back
          var replyBackElement = document.getElementById('wechat-need-reply-back');
          replyBackElement.innerText = '复制成功';
          replyBackElement.style.color = 'green';
      })
      .catch(function(err) {
          console.error('Could not copy text: ', err);
      });
  });
});