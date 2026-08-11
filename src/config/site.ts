// =========================================================
// 站点信息 — 只需要改这一个文件
// =========================================================

export const SITE = {
  name: "刘易航",
  nameEn: "Liu Yihang",
  email: "835465868@qq.com", // TODO: 改成你的邮箱
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/66ab91b4000000001d0224b6",
  aboutZh:
    "“过去的生命已经死亡，我对于这死亡有大欢喜，因为借此知道它曾经存活。”时常回头，这个网站就是一个固定时间的锚点。\n第一次使用这种全新的介质，有很多粗糙的、需要完善的地方，多多包涵。希望看完这个网站可以给你带来一点启发、一点想法、一点审美上的体验！\n终始弗渝，上善若水。",
  aboutEn:
    "The life of the past is dead, and I take great joy in this death, for it is thus that I know it once lived. I keep looking back; this website is an anchor fixed in time.\n\nThis is my first time with a medium so new to me — there are rough edges still, much to be refined, and I ask for your patience. I hope that going through these pages may leave you with a spark of inspiration, a passing thought, a small experience of beauty.\n\nSteadfast from first to last — the highest good is like water.",
};

// Works 下的摄影系列目录（位置先空着，稍后修改标题和数量）
// 每个系列对应一个页面 src/photos/<slug>/ 文件夹
export const WORK_SERIES = [
  {
    slug: "series-01",
    title: "学校",
    en: "School",
    description:
      "学校至今仍是我创作的主要地点。在这里，摄影是快速抽离的通道，把寻常从语境中剥离。游走于走廊与空地之间，灵感从角落渗出。快门落下，日常被截取为另一个世界的第一帧。",
    descriptionEn:
      "School remains my primary site of creation. Here, photography is a channel of quick extraction — pulling the ordinary away from its context. Wandering between corridors and open spaces, inspiration seeps out from the corners. When the shutter falls, the everyday is captured as the first frame of another world.",
  },
  {
    slug: "series-02",
    title: "观察者",
    en: "Observer",
    description: "什么是美？美在哪里？「观察者」，我很喜欢这个标题，在这里，纯粹的“监控”视角，旨在引导观察生活中美的、细微的小事物。",
    descriptionEn:
      "What is beauty? Where does it live? “Observer” — a title I love. Through a purely observational gaze, I aim to direct attention to the small, beautiful particulars of everyday life.",
  },
  {
    slug: "series-03",
    title: "探索时期",
    en: "Exploration Period",
    sortBy: "date", // 按拍摄时间自动排序（其他系列默认按文件名排序）
    description: "这里记录了那些不成熟的、稚嫩的。在开始拍照之初，读到了一篇文章，大概讲的是初学者一定要好好保存自己初期的作品，很庆幸我照做了，过去的一切都是走到这里的教材。",
    descriptionEn:
      "This series keeps the immature and the unpolished. When I first started photographing, I read an article about how beginners should carefully preserve their earliest work — I am glad I followed that advice. Everything from the past is the textbook that brought me here.",
  },
];
