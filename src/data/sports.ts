export type SportRule = {
  slug: string;
  label: string;
  icon: string;
  summary: string;
  details: string;
  rules: Array<{ title: string; description: string }>;
};

export const sports: SportRule[] = [
  {
    slug: 'swimming',
    label: '游泳',
    icon: '🏊',
    summary: '游泳规则包括出发、转身、触壁和泳姿要求。',
    details: '游泳比赛由出发、转身和触壁组成，裁判根据规则判定犯规和成绩。',
    rules: [
      {
        title: '出发与触发',
        description: '比赛开始时运动员必须在起跳台上准备，触壁时需用手触及池壁。',
      },
      {
        title: '泳姿要求',
        description: '自由泳允许任意泳姿；蝶泳、仰泳和蛙泳必须符合规定动作。',
      },
      {
        title: '转身规则',
        description: '转身时必须按照规定动作完成，并在池壁触及后起身继续游进。',
      },
    ],
  },
  {
    slug: 'basketball',
    label: '篮球',
    icon: '🏀',
    summary: '篮球规则涵盖得分、犯规、运球和比赛节奏。',
    details: '比赛分为四节，每节12分钟（国际规则为10分钟），球员通过投篮得分并遵守犯规限制。',
    rules: [
      {
        title: '得分方式',
        description: '篮内投篮得2分，三分线外投篮得3分，罚球命中得1分。',
      },
      {
        title: '犯规与违例',
        description: '运动员不得推人、拉人或非法阻挡，否则判罚罚球或球权转换。',
      },
        {
        title: '运球规则',
        description: '持球运动员必须运球前进，不能双手持球后再次运球或走步。',
      },
    ],
  },
  {
    slug: 'soccer',
    label: '足球',
    icon: '⚽',
    summary: '足球规则说明包括进球、犯规、越位和比赛裁判判罚。',
    details: '比赛由两队各11人进行，目标是把球送入对方球门，同时遵循越位和犯规规则。',
    rules: [
      {
        title: '进球判定',
        description: '当整个球体完全越过球门线即为进球，裁判根据球门线技术辅助判定。',
      },
      {
        title: '越位规则',
        description: '进攻队员传球瞬间比倒数第二名防守队员更靠近球门线即判越位。',
      },
      {
        title: '直接任意球',
        description: '防守方犯规后，攻击方可直接射门得分或传球。',
      },
    ],
  },
  {
    slug: 'tennis',
    label: '网球',
    icon: '🎾',
    summary: '网球规则包括发球、得分、球场界限和比赛盘数。',
    details: '网球比赛按局、盘、胜盘计算，发球方必须将球发到对角的发球区内。',
    rules: [
      {
        title: '发球要求',
        description: '发球时球必须先抛起并在落下前击球，球落在对角发球区内。',
      },
      {
        title: '计分方式',
        description: '分数顺序为0、15、30、40，若双方40平则进入优势或抢十。',
      },
      {
        title: '球场界限',
        description: '球弹地后必须落在界内，边线是否有效由裁判或边裁判定。',
      },
    ],
  },
  {
    slug: 'badminton',
    label: '羽毛球',
    icon: '🏸',
    summary: '羽毛球规则涵盖发球、计分、界线和换边机制。',
    details: '羽毛球采用21分制，发球必须斜向对角发出，比赛过程中可进行换边。',
    rules: [
      {
        title: '发球规则',
        description: '发球时球拍击中球后球必须先向下落，且球落在对角发球区内。',
      },
      {
        title: '计分制度',
        description: '每局21分、赢两局胜出；20平后需领先2分，最多打到30分。',
      },
      {
        title: '运动员位置',
        description: '单打和双打的发球区不同，持球方在发球前必须静止。',
      },
    ],
  },
];

export const getSportBySlug = (slug: string) => sports.find((item) => item.slug === slug);
