import type { Locale } from './i18n';

export type LocalizedText = Record<Locale, string>;

export type SportRule = {
  slug: string;
  icon: string;
  label: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText;
  rules: Array<{ title: LocalizedText; brief: LocalizedText; detail: LocalizedText }>;
};

export const sports: SportRule[] = [
  {
    slug: 'swimming',
    icon: '🏊',
    label: {
      zh: '游泳',
      en: 'Swimming',
      de: 'Schwimmen',
    },
    summary: {
      zh: '游泳规则包括出发、转身、触壁和泳姿要求。',
      en: 'Swimming rules cover starts, turns, wall touches, and stroke requirements.',
      de: 'Schwimmregeln umfassen Start, Wenden, Wandberührung und Stilanforderungen.',
    },
    details: {
      zh: '游泳比赛由出发、转身和触壁组成，裁判根据规则判定犯规和成绩。',
      en: 'A swimming race consists of starts, turns, and wall touches, with referees judging compliance and timing.',
      de: 'Ein Schwimmwettkampf besteht aus Start, Wenden und Wandberührung; Schiedsrichter bewerten Regelkonformität und Zeit.',
    },
    rules: [
      {
        title: {
          zh: '出发与触发',
          en: 'Starts and Wall Touches',
          de: 'Start und Wandberührung',
        },
        brief: {
          zh: '起跳时要保持准备，触壁时用手触及池壁。',
          en: 'Stay ready at the start and touch the wall with your hand on turns and finishes.',
          de: 'Beim Start bereit sein und bei Wendungen sowie am Ziel die Wand mit der Hand berühren.',
        },
        detail: {
          zh: '比赛开始时运动员必须在起跳台上准备，触壁时需用手触及池壁。',
          en: 'At the start, swimmers must be ready on the block and use their hand to touch the wall during turns and finishes.',
          de: 'Beim Start müssen Schwimmer auf dem Startblock bereit sein und bei Wendungen/Zielen die Wand mit der Hand berühren.',
        },
      },
      {
        title: {
          zh: '泳姿要求',
          en: 'Stroke Requirements',
          de: 'Schwimmstilanforderungen',
        },
        brief: {
          zh: '不同泳姿有各自规定动作。',
          en: 'Each stroke has its own required motion and technique.',
          de: 'Jede Schwimmart hat ihre eigenen vorgeschriebenen Bewegungen.',
        },
        detail: {
          zh: '自由泳允许任意泳姿；蝶泳、仰泳和蛙泳必须符合规定动作。',
          en: 'Freestyle allows any stroke, while butterfly, backstroke, and breaststroke must follow the prescribed motions.',
          de: 'Freistil erlaubt beliebige Techniken, während Schmetterling, Rücken und Brust die vorgeschriebenen Bewegungen einhalten müssen.',
        },
      },
      {
        title: {
          zh: '转身规则',
          en: 'Turn Rules',
          de: 'Wenderegeln',
        },
        brief: {
          zh: '转身时必须按照规定动作完成并继续游进。',
          en: 'Complete turns according to the rules and continue swimming without delay.',
          de: 'Wenden müssen regelkonform ausgeführt werden und das Schwimmen ohne Verzögerung fortgesetzt werden.',
        },
        detail: {
          zh: '转身时必须按照规定动作完成，并在池壁触及后起身继续游进。',
          en: 'Turns must follow the prescribed technique, with a wall touch before pushing off to continue.',
          de: 'Wenden müssen korrekt ausgeführt werden, mit Wandberührung vor dem Abdruck zum Weiterfahren.',
        },
      },
    ],
  },
  {
    slug: 'basketball',
    icon: '🏀',
    label: {
      zh: '篮球',
      en: 'Basketball',
      de: 'Basketball',
    },
    summary: {
      zh: '篮球规则涵盖得分、犯规、运球和比赛节奏。',
      en: 'Basketball rules cover scoring, fouls, dribbling, and game flow.',
      de: 'Basketballregeln umfassen Punkte, Fouls, Dribbling und Spielablauf.',
    },
    details: {
      zh: '比赛分为四节，每节12分钟（国际规则为10分钟），球员通过投篮得分并遵守犯规限制。',
      en: 'The game is played in quarters and players score by shooting while avoiding fouls.',
      de: 'Das Spiel besteht aus Vierteln; Spieler punkten durch Würfe und müssen Fouls vermeiden.',
    },
    rules: [
      {
        title: {
          zh: '得分方式',
          en: 'Scoring',
          de: 'Punktewertung',
        },
        brief: {
          zh: '篮内投篮得2分，三分线外投篮得3分。',
          en: 'A shot inside the arc is worth two points, outside is worth three.',
          de: 'Ein Korb innerhalb des Dreipunktbereichs zählt zwei, außerhalb drei Punkte.',
        },
        detail: {
          zh: '篮内投篮得2分，三分线外投篮得3分，罚球命中得1分。',
          en: 'Field goals inside the three-point line score two points, beyond it score three, and free throws score one.',
          de: 'Treffer innerhalb der Dreierlinie zählen zwei Punkte, außerhalb drei und Freiwürfe einen Punkt.',
        },
      },
      {
        title: {
          zh: '犯规与违例',
          en: 'Fouls and Violations',
          de: 'Fouls und Regelverstöße',
        },
        brief: {
          zh: '推人、拉人等犯规会被判罚。',
          en: 'Pushing or holding opponents counts as a foul and will be penalized.',
          de: 'Schieben oder Festhalten des Gegners wird als Foul gewertet.',
        },
        detail: {
          zh: '运动员不得推人、拉人或非法阻挡，否则判罚罚球或球权转换。',
          en: 'Players may not push, hold, or illegally screen; penalties include free throws or turnover.',
          de: 'Spieler dürfen nicht schieben, halten oder illegal blocken; Strafen sind Freiwürfe oder Ballverlust.',
        },
      },
      {
        title: {
          zh: '运球规则',
          en: 'Dribbling Rules',
          de: 'Dribblingregeln',
        },
        brief: {
          zh: '持球必须运球前进，不可再次运球或走步。',
          en: 'Players must dribble while moving and cannot double dribble or travel.',
          de: 'Spieler müssen beim Vorrücken dribbeln und dürfen nicht doppelt dribbeln oder laufen.',
        },
        detail: {
          zh: '持球运动员必须运球前进，不能双手持球后再次运球或走步。',
          en: 'The ball handler must dribble and may not stop and then dribble again or take extra steps.',
          de: 'Der Ballführer muss dribbeln und darf nicht anhalten und erneut dribbeln oder zusätzliche Schritte machen.',
        },
      },
    ],
  },
  {
    slug: 'soccer',
    icon: '⚽',
    label: {
      zh: '足球',
      en: 'Soccer',
      de: 'Fußball',
    },
    summary: {
      zh: '足球规则包括比赛人数、场地、球、比赛时间、开球、得分、违规、获胜和替换要求。',
      en: 'Soccer rules cover players, field, ball, match time, kick-off, scoring, fouls, winning, and substitutions.',
      de: 'Fußballregeln umfassen Spieler, Spielfeld, Ball, Spielzeit, Anstoß, Tore, Fouls, Sieg und Auswechslungen.',
    },
    details: {
      zh: '本条目包含简要和详细的 FIFA 足球规则说明，覆盖比赛人数、场地、球、比赛时间、开球方式、得分规则、违规处罚、获胜规则和其他要求。',
      en: 'This entry contains FIFA soccer rules, covering team size, field, ball, match time, kick-off, scoring, fouls, winning, and other requirements.',
      de: 'Dieser Eintrag enthält FIFA-Fußballregeln zu Teamgröße, Spielfeld, Ball, Spielzeit, Anstoß, Tore, Fouls, Sieg und weiteren Anforderungen.',
    },
    rules: [
      {
        title: {
          zh: '比赛人数',
          en: 'Number of Players',
          de: 'Spieleranzahl',
        },
        brief: {
          zh: '每队11人，其中1名守门员，最多3名替补。',
          en: 'Each team has 11 players, including one goalkeeper, with up to three substitutes.',
          de: 'Jedes Team hat 11 Spieler, darunter einen Torwart, plus bis zu drei Auswechselspieler.',
        },
        detail: {
          zh: '每队必须有至少7名球员才能开始比赛。每队可以最多有11名球员注册并上场比赛，其中必须有一名守门员。每队可以有最多3名替补球员，每场比赛中可以进行3次替换。替补球员一旦被替换下场，不能再被替换上场。',
          en: 'A match requires at least seven players to start. Teams may register up to 11 players, including one goalkeeper, and use up to three substitutes during a match.',
          de: 'Ein Spiel erfordert mindestens sieben Spieler zum Start. Teams dürfen bis zu 11 Spieler registrieren, einschließlich eines Torwarts, und bis zu drei Auswechselspieler einsetzen.',
        },
      },
      {
        title: {
          zh: '比赛场地',
          en: 'Field Dimensions',
          de: 'Spielfeldabmessungen',
        },
        brief: {
          zh: '场地长100-110米，宽64-75米；球门宽7.32m，高2.44m。',
          en: 'The field is 100–110m long, 64–75m wide; goals are 7.32m by 2.44m.',
          de: 'Das Feld ist 100–110m lang, 64–75m breit; Tore sind 7,32m × 2,44m.',
        },
        detail: {
          zh: '场地必须是矩形，长度应在100-110米（110-120码）之间，宽度应在64-75米（70-80码）之间。球门必须固定在场地每端的中心，宽度为7.32米（8码），高度为2.44米（8英尺）。球门必须由两根直立的门柱和一根水平横梁组成，门柱和横梁必须牢固且具有相同的宽度和厚度。场地的四个角必须有一个不可移动的角旗杆，旗杆的高度至少为1.5米。场地的中心、中线、中圈、16.5米（18码）线和两个罚球区必须清晰地标明。中线和中圈必须用球在地面上滚动来确定位置。',
          en: 'The field must be rectangular, 100–110m long and 64–75m wide. Goals are centered at each end, 7.32m wide and 2.44m high, with corner flags and marked penalty areas.',
          de: 'Das Feld muss rechteckig sein, 100–110m lang und 64–75m breit. Tore stehen mittig an den Enden, 7,32m breit und 2,44m hoch, mit Eckfahnen und markierten Strafräumen.',
        },
      },
      {
        title: {
          zh: '球',
          en: 'The Ball',
          de: 'Der Ball',
        },
        brief: {
          zh: '球直径68-69厘米，重量410-450克。',
          en: 'The ball measures 68–69cm in circumference and weighs 410–450g.',
          de: 'Der Ball hat einen Umfang von 68–69cm und wiegt 410–450g.',
        },
        detail: {
          zh: '球的直径应在68-69厘米之间。球的重量应在410-450克之间。球必须由适当材料制成，内部装有适当物质以保持其形状。球的颜色必须为白色或黑白相间的颜色。',
          en: 'The ball must be made of suitable material, keep its shape, and weigh 410–450g with a circumference of 68–69cm.',
          de: 'Der Ball muss aus geeignetem Material bestehen, seine Form behalten und 410–450g wiegen bei einem Umfang von 68–69cm.',
        },
      },
      {
        title: {
          zh: '比赛时间',
          en: 'Match Duration',
          de: 'Spielzeit',
        },
        brief: {
          zh: '常规赛每半场45分钟，中场15分钟；加时赛每半场15分钟。',
          en: 'A match has two 45-minute halves with a 15-minute half-time; extra time is two 15-minute halves.',
          de: 'Ein Spiel hat zwei Halbzeiten zu je 45 Minuten mit 15 Minuten Pause; die Verlängerung hat zwei Halbzeiten zu je 15 Minuten.',
        },
        detail: {
          zh: '每场比赛分为两个45分钟的半场，中间休息15分钟。如需加时赛，加时赛分为两个15分钟的半场，中间休息5分钟。如加时赛仍未分出胜负，进行点球大战。每轮点球大战，每队各罚5次点球，如有需要，进行突然死亡点球。',
          en: 'Matches are 90 minutes plus half-time. If tied, extra time is two 15-minute halves, followed by penalties if needed.',
          de: 'Spiele dauern 90 Minuten plus Pause. Bei Unentschieden folgt eine Verlängerung mit zwei Mal 15 Minuten und ggf. ein Elfmeterschießen.',
        },
      },
      {
        title: {
          zh: '开始比赛',
          en: 'Kick-Off',
          de: 'Anstoß',
        },
        brief: {
          zh: '掷硬币决定先发球，并由开球门球开始比赛。',
          en: 'A coin toss decides which team starts, and the match begins with a kick-off.',
          de: 'Ein Münzwurf entscheidet, welches Team anstößt; das Spiel beginnt mit dem Anstoß.',
        },
        detail: {
          zh: '开始比赛前，两队必须经过掷硬币决定哪队先发球。开球方式为开球门球，球必须向对方半场踢发。每次进球后，应由落球方的一名球员在对方半场的中线中心重新开始比赛。',
          en: 'Before kickoff, a coin toss decides the starting team. Kick-off is taken from midfield into the opponent’s half, and play restarts from the center after each goal.',
          de: 'Vor dem Anstoß entscheidet ein Münzwurf über den Beginn. Der Anstoß erfolgt von der Mittellinie in die gegnerische Hälfte; nach jedem Tor erfolgt ein Neustart aus der Mitte.',
        },
      },
      {
        title: {
          zh: '得分规则',
          en: 'Scoring',
          de: 'Tore',
        },
        brief: {
          zh: '进球得1分，由对方半场中线重新开始比赛。',
          en: 'A goal counts as one point, and play restarts from the center line afterward.',
          de: 'Ein Tor zählt einen Punkt; das Spiel wird danach von der Mittellinie neu gestartet.',
        },
        detail: {
          zh: '进球得1分。进球后立即暂停比赛，由进球方的一名球员在本方半场或对方半场的中线中心重新开始比赛。',
          en: 'A goal is worth one point. After a goal, the opposing team restarts the match from the center spot.',
          de: 'Ein Tor zählt einen Punkt. Nach einem Tor spielt die gegnerische Mannschaft vom Mittelpunkt aus weiter.',
        },
      },
      {
        title: {
          zh: '违规处罚',
          en: 'Fouls and Penalties',
          de: 'Fouls und Strafen',
        },
        brief: {
          zh: '手球直接任意球，越位间接任意球，累积黄牌变红牌。',
          en: 'Handball is a direct free kick, offside is indirect, and two yellow cards equal a red.',
          de: 'Handspiel ist direkter Freistoß, Abseits indirekter Freistoß, und zwei Gelbe gelten als Rot.',
        },
        detail: {
          zh: '手球：直接任意球。越位：除非犯规发生在自家禁区内，否则为间接任意球。犯规累积：每张黄牌计1分，2张黄牌变红牌罚下场；直接红牌罚下场。红牌：球员被罚下场后，该队在剩余的比赛时间内只能以10名球员应战。如果在比赛中，一方需要替换球员，被替换下场的球员必须立即离开场地，在本方替换区等待。',
          en: 'Handball results in a direct free kick. Offside is indirect unless in the defending penalty area. Two yellows equal a red, and the penalized player leaves the field.',
          de: 'Handspiel führt zu einem direkten Freistoß. Abseits ist indirekter Freistoß, außer im eigenen Strafraum. Zwei Gelbe ergeben Rot; der Spieler muss den Platz verlassen.',
        },
      },
      {
        title: {
          zh: '获胜规则',
          en: 'Winning',
          de: 'Gewinn',
        },
        brief: {
          zh: '常规时间得分高者获胜，平局则点球大战。',
          en: 'The team with more goals wins; ties are resolved with penalties if needed.',
          de: 'Das Team mit mehr Toren gewinnt; bei Unentschieden folgt ggf. ein Elfmeterschießen.',
        },
        detail: {
          zh: '比赛结束后，得分高的队伍获胜。如在常规时间和加时赛结束后平局，进行点球大战。点球大战每轮5次，如有需要，进行突然死亡点球。',
          en: 'The match winner is the team with the higher score. Extra time and penalty kicks decide ties when necessary.',
          de: 'Gewinner ist das Team mit mehr Toren. Bei Gleichstand entscheiden Verlängerung und Elfmeterschießen.',
        },
      },
      {
        title: {
          zh: '其他规则',
          en: 'Other Rules',
          de: 'Weitere Regeln',
        },
        brief: {
          zh: '球员应尊重裁判对手，禁止欺诈和暴力。',
          en: 'Players must respect referees and opponents, and cheating or violence is forbidden.',
          de: 'Spieler müssen Schiedsrichter und Gegner respektieren; Betrug und Gewalt sind verboten.',
        },
        detail: {
          zh: '球员必须尊重裁判和对手。不允许任何形式的欺诈行为。球员必须在比赛前向裁判出示身份证明，并在比赛结束后立即离开场地。守门员在本方禁区内可以使用手控制球，但在本方禁区以外的区域只能使用脚控制球。球员不得穿着可能危险的装备。球员不得在任何情况下使用暴力行为。替换球员：每队在每场比赛中可进行3次替换，替补球员不能再次被替换上场。替换球员必须在裁判允许的情况下进行替换，替换时必须在本方替换区进行，并且替换球员必须先离开场地，再进入场地。',
          en: 'Players must respect referees and opponents. Goalkeepers may use hands inside their penalty area but not outside. Substitutions require referee approval and must follow the substitution zone rules.',
          de: 'Spieler müssen Schiedsrichter und Gegner respektieren. Torhüter dürfen im eigenen Strafraum Hände benutzen, außerhalb nur mit dem Fuß. Auswechslungen erfolgen nur mit Erlaubnis und aus der Auswechselzone.',
        },
      },
    ],
  },
  {
    slug: 'tennis',
    icon: '🎾',
    label: {
      zh: '网球',
      en: 'Tennis',
      de: 'Tennis',
    },
    summary: {
      zh: '网球规则包括发球、得分、球场界限和比赛盘数。',
      en: 'Tennis rules cover serving, scoring, court boundaries, and sets.',
      de: 'Tennisregeln umfassen Aufschlag, Zählweise, Spielfeldbegrenzungen und Sätze.',
    },
    details: {
      zh: '网球比赛按局、盘、胜盘计算，发球方必须将球发到对角的发球区内。',
      en: 'Matches are scored by games and sets, and serves must land in the opposite service box.',
      de: 'Spiele werden in Games und Sätzen gewertet; der Aufschlag muss diagonal ins gegenüberliegende Feld gehen.',
    },
    rules: [
      {
        title: {
          zh: '发球要求',
          en: 'Serve Requirements',
          de: 'Aufschlaganforderungen',
        },
        brief: {
          zh: '发球前必须抛球并击向对角发球区。',
          en: 'The ball must be tossed before hitting it into the opposite service box.',
          de: 'Der Ball muss hochgeworfen werden und diagonal ins Aufschlagfeld gespielt werden.',
        },
        detail: {
          zh: '发球时球必须先抛起并在落下前击球，球落在对角发球区内。',
          en: 'The serve must be struck after a toss, landing in the opposite diagonal service court.',
          de: 'Der Aufschlag erfolgt nach einem hohen Wurf, der Ball muss diagonal im gegnerischen Aufschlagfeld landen.',
        },
      },
      {
        title: {
          zh: '计分方式',
          en: 'Scoring System',
          de: 'Punktesystem',
        },
        brief: {
          zh: '计分为 0、15、30、40，40平后进入优势。',
          en: 'Score goes 0, 15, 30, 40, and deuce is followed by advantage.',
          de: 'Die Punktfolge lautet 0, 15, 30, 40; bei 40:40 folgt Vorteil.',
        },
        detail: {
          zh: '分数顺序为0、15、30、40，若双方40平则进入优势或抢十。',
          en: 'The score moves from love through 15, 30, 40, and deuce to advantage or tiebreak when needed.',
          de: 'Die Punktfolge verläuft von Null über 15, 30, 40 bis Vorteil oder Tie-Break bei Bedarf.',
        },
      },
      {
        title: {
          zh: '球场界限',
          en: 'Court Boundaries',
          de: 'Spielfeldgrenzen',
        },
        brief: {
          zh: '球必须落在界内，边线有效由裁判判定。',
          en: 'The ball must land inside the court lines, and the umpire judges boundary calls.',
          de: 'Der Ball muss innerhalb der Linien landen; Linienrichter entscheiden über die Gültigkeit.',
        },
        detail: {
          zh: '球弹地后必须落在界内，边线是否有效由裁判或边裁判定。',
          en: 'After bouncing, the ball must land inside the lines, and officials decide if it was good or out.',
          de: 'Nach dem Aufkommen muss der Ball innerhalb der Linien landen; Offizielle entscheiden, ob er gültig war.',
        },
      },
    ],
  },
  {
    slug: 'badminton',
    icon: '🏸',
    label: {
      zh: '羽毛球',
      en: 'Badminton',
      de: 'Badminton',
    },
    summary: {
      zh: '羽毛球规则涵盖发球、计分、界线和换边机制。',
      en: 'Badminton rules include serving, scoring, boundaries, and side changes.',
      de: 'Badmintonregeln umfassen Aufschlag, Punktezählung, Grenzen und Seitenwechsel.',
    },
    details: {
      zh: '羽毛球采用21分制，发球必须斜向对角发出，比赛过程中可进行换边。',
      en: 'Matches use a 21-point rally score, with serves sent diagonally and side changes during play.',
      de: 'Spiele werden bis 21 Punkte gespielt, der Aufschlag diagonal und ein Seitenwechsel findet statt.',
    },
    rules: [
      {
        title: {
          zh: '发球规则',
          en: 'Serving Rules',
          de: 'Aufschlagregeln',
        },
        brief: {
          zh: '发球必须先向下落，落在对角发球区内。',
          en: 'Serves must fall downward into the opposite service court.',
          de: 'Der Aufschlag muss nach unten fallen und im diagonalen Feld landen.',
        },
        detail: {
          zh: '发球时球拍击中球后球必须先向下落，且球落在对角发球区内。',
          en: 'When serving, the racket hits the shuttle so it initially travels downward and lands in the diagonal court.',
          de: 'Beim Aufschlag trifft der Schläger den Federball so, dass er zuerst nach unten fliegt und diagonal landet.',
        },
      },
      {
        title: {
          zh: '计分制度',
          en: 'Scoring System',
          de: 'Zählweise',
        },
        brief: {
          zh: '每局21分，最多打到30分。',
          en: 'Each game is to 21 points, with a maximum of 30 in extended play.',
          de: 'Jedes Spiel geht bis 21 Punkte, maximal bis 30 Punkte.',
        },
        detail: {
          zh: '每局21分、赢两局胜出；20平后需领先2分，最多打到30分。',
          en: 'A match is best of three games to 21; at 20-20 you must lead by two points, up to 30.',
          de: 'Ein Match geht über drei Sätze bis 21; bei 20:20 muss der Abstand zwei Punkte betragen, maximal bis 30.',
        },
      },
      {
        title: {
          zh: '运动员位置',
          en: 'Player Position',
          de: 'Spielerposition',
        },
        brief: {
          zh: '单打、双打发球区不同，发球前必须静止。',
          en: 'Singles and doubles have different service courts, and the server must remain still before hitting.',
          de: 'Einzel und Doppel haben unterschiedliche Aufschlagfelder; der Aufschläger muss vor dem Schlag stillstehen.',
        },
        detail: {
          zh: '单打和双打的发球区不同，持球方在发球前必须静止。',
          en: 'The service areas differ for singles and doubles, and the server must be stationary before the serve.',
          de: 'Im Einzel und Doppel unterscheiden sich die Aufschlagfelder; der Server muss vor dem Aufschlag stillstehen.',
        },
      },
    ],
  },
];

export const getSportBySlug = (slug: string) => sports.find((item) => item.slug === slug);
