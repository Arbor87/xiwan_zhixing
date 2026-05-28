const panoramaBase = `${import.meta.env.BASE_URL}panoramas/`

export const scenes = [
  {
    id: 'village_gate',
    title: '后溪村入口',
    image: `${panoramaBase}village_gate.jpg`,
    description:
      '这里是溪智绿行导览的起点。AI 导游会结合村口标识、交通动线和游客兴趣，推荐乡村文化、绿色步道与助农展区的游览路线。',
    aiTips: [
      '推荐从村口开始了解后溪村的生态治理与乡村振兴成果。',
      '可在真实项目中接入语音播报、实时问答和游客画像推荐。',
    ],
    hotspots: [
      { type: 'scene', pitch: -6, yaw: 42, text: '前往校园走廊', target: 'green_path' },
      { type: 'info', pitch: 2, yaw: -25, text: '查看本场景介绍' },
      { type: 'guide', pitch: -10, yaw: 118, text: '打开 AI 导游讲解' },
    ],
  },
  {
    id: 'green_path',
    title: '校园走廊',
    image: `${panoramaBase}green_path.jpg`,
    description:
      '这里展示校园宿舍与教学生活空间的走廊环境。AI 导游可以结合楼栋位置、公共空间、安全提示和校园生活服务进行讲解。',
    aiTips: [
      '这张图片由普通手机长条全景处理为 2:1 演示图，适合课程原型预览。',
      '正式项目建议后续替换为 360 相机或 Photo Sphere 导出的真实球形全景。',
    ],
    hotspots: [
      { type: 'scene', pitch: -4, yaw: 65, text: '前往支教课堂', target: 'classroom' },
      { type: 'info', pitch: 5, yaw: -50, text: '查看走廊介绍' },
      { type: 'guide', pitch: -8, yaw: 150, text: '打开 AI 导游讲解' },
    ],
  },
  {
    id: 'classroom',
    title: '支教课堂',
    image: `${panoramaBase}classroom.jpg`,
    description:
      '支教课堂用于展示高校实践团队的课程服务、数字素养培训和乡村儿童陪伴计划。AI 导游可模拟老师讲解课程主题。',
    aiTips: [
      '可扩展为课程预约、学习资源推荐和课堂成果展示。',
      '适合课程汇报时突出“高校实践 + AI 教育服务”的结合。',
    ],
    hotspots: [
      { type: 'scene', pitch: -5, yaw: 82, text: '前往电商助农展区', target: 'farm_product' },
      { type: 'info', pitch: 8, yaw: -35, text: '查看课堂介绍' },
      { type: 'guide', pitch: -12, yaw: 172, text: '打开 AI 导游讲解' },
    ],
  },
  {
    id: 'farm_product',
    title: '电商助农展区',
    image: `${panoramaBase}farm_product.jpg`,
    description:
      '电商助农展区聚合农产品展示、直播带货、品牌故事和订单转化。AI 导游可介绍产品卖点，并模拟智能客服回答游客问题。',
    aiTips: [
      '后续可接入商品数据库、直播链接和订单小程序入口。',
      '适合展示 AI 文案生成、智能客服和农产品推荐能力。',
    ],
    hotspots: [
      { type: 'scene', pitch: -6, yaw: 50, text: '返回后溪村入口', target: 'village_gate' },
      { type: 'info', pitch: 4, yaw: -58, text: '查看展区介绍' },
      { type: 'guide', pitch: -8, yaw: 134, text: '打开 AI 导游讲解' },
    ],
  },
]
