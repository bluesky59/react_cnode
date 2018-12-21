exports.tagType = val => {
  const map = {
    all: {
      label: '全部',
      icon: 'home',
      link: '/index/all',
      color: 'magenta',
    },
    top: {
      label: '置顶',
      icon: 'key',
      link: '/index/top',
      color: 'green',
    },
    good: {
      label: '精华',
      icon: 'like',
      link: '/index/good',
      color: 'cyan',
    },
    ask: {
      label: '问题',
      icon: 'mail',
      link: '/index/ask',
      color: 'blue',
    },
    share: {
      label: '分享',
      icon: 'link',
      link: '/index/share',
      color: 'geekblue',
    },
    job: {
      label: '招聘',
      icon: 'mail',
      link: '/index/job',
      color: 'purple',
    },
    dev: {
      label: '测试',
      icon: 'link',
      link: '/index/dev',
      color: 'lime',
    },
  };
  return map[val] ? map[val] : '';
};