let loading = false
let project = []
let i = 0
let notifyList = []
function notify(title, message) {
  i++
  notifyList.push({id: `notify_alert${i}`, title: title, message: message})
  chrome.notifications.create(
    notifyList[0].id, // notifyId
    {
      type: "basic",
      iconUrl: "icon.png",
      title: title,
      message: message,
      eventTime: 2000,
      items: notifyList
    },
    function () {
      chrome.notifications.clear( notifyList[0].id)
      notifyList.splice(0, 1)
    }
  );
}

function init() {

  // window.open('http://ops.yunshanmeicai.com/#/workbench')
  // $("#popup-form .project").each(function () {
  //   let projectName = $(this).find('.projectName').val()
  //   let branch = $(this).find('.branch').val()
  //   let tips = $(this).find('.tips').val()
  //   if (projectName && branch && tips) {
  //     project.push({
  //       project: projectName,
  //       branch: branch,
  //       tips: tips
  //     })
  //   } else {
  //     loading = false
  //     return false
  //   }
  // })
  project = [
    { projectName: 'scm-purchaser-manager', env: '1', branch: 'guanzhong', tips: '123'},
    { projectName: 'mall-fe', env: '1', branch: 'develop', tips: '321'}
  ]
  if (project.length == 2) {
    notify('安装成功', `部署前的字段校验成功`)
  } else {
    console.log($('.projectName'))
    notify('字段校验失败', `请确认部署信息后重试`)
  }
}

function begin(project) {
  notify(`${project}字段校验成功`, '开始部署')
}

function end(project, result) {
  notify(`${project}部署结果`, `${project}部署 ${result ? '成功' : '失败'}`)
}
function handleClick() {
  // if (loading) return notify('注意！！！', '部署进行中！请勿中途操作')
  // loading = true
  // init()
  // let text = $("#app .app-col.el-col.el-col-8 .app-name").text()
  // loading = false
  chrome.notifications.create(
    'lala',
     {
       type: "list",
       iconUrl: "icon.png",
       title: '123',
       message: '123',
       eventTime: 2000,
       items: [{ title: '1', message: '1'}, {title: '2', message: '2'}]
     },
     function () {
       chrome.notifications.clear( 'lala')
     }
   );
}
window.onload = function () {
  $('#tangshao_button').click(handleClick)
}


