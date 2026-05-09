# The Freak Circus PRD

> 生成方式：基于 `product-definition-prd` Skill  
> 日期：2026-05-09

按 `product-definition-prd` 的流程先校准关键词：`the freak circus` 当前明确指向 **Garula 的 18+ 心理恐怖视觉小说**。截至 **2026-05-09**，查到的官方核心阵地是 **itch.io**，官方公开状态仍是 **Prototype**；SERP 里已经有大量非官方 `play online / wiki / guide / character` 站在抢流量。基于这个现实，这个词最适合做的不是“品牌官网”，而是 **非官方 guide / safety / route hub**。  
来源：<https://garula.itch.io/>、<https://garula.itch.io/the-freak-circus/devlog/1114899/last-devlog-before-the-update-i-hope>、<https://itch.io/games/top-rated/prototypes>

## 0. 结论先行

- 要不要做：可以做，但只建议做低成本、非官方、内容型站点。
- 为什么做：关键词意图明确，粉丝热度真实，且官方内容碎片化；用户会搜 `play online`、`guide`、`Pierrot`、`Harlequin`、`Day 2`、`ending`。
- 一句话定位：`The Freak Circus` 的非官方安全导航、角色路线与上手指南站。
- 首版做什么：官方获取指引、角色页、Day 2/更新说明、FAQ、内容警告、基础路线和结局说明。
- 明确不做什么：不做盗版镜像、不做未授权在线播放、不冒充官方、不做开放社区。

## 1. 市场概述

### 1.1 关键词判断

- 主词：`the freak circus`
- 长尾词：
  - `the freak circus play online`
  - `the freak circus guide`
  - `the freak circus day 2`
  - `the freak circus endings`
  - `pierrot the freak circus`
  - `harlequin the freak circus`
  - `the freak circus wiki`
  - `the freak circus content warning`

### 1.2 趋势判断

- 短期：强，仍在更新驱动阶段。
- 中期：取决于后续 `Day 2+` 内容、角色热度、同人传播。
- 长期：单一作品词，生命周期有限，但角色词和路线词可延长流量尾巴。

### 1.3 机会判断

- 强：粉丝搜索意图清晰，且角色型长尾非常适合 SEO。
- 中：官方只有 itch.io 核心页和 devlog，知识结构不完整。
- 弱：这是 18+ 成人向题材，商业化和平台分发会受限制。
- 结论：适合做轻量 SEO 项目，不适合重投入创业站。

## 2. SERP 与竞品分析

### 2.1 SERP 现状

- 官方源：Garula 的 itch.io 页面与 devlog。
- 非官方站：大量 `play online`、`wiki`、`guide`、角色页站点。
- 内容模式：角色介绍、Day 2 说明、浏览器玩法、结局页、语言页。

### 2.2 Top 3 竞品

1. 官方 itch.io
   - 优势：唯一权威来源，更新、下载、作者声明都在这里。
   - 劣势：不承担完整 wiki/攻略/角色整理职责。

2. `play online` 镜像站
   - 优势：抢占强意图词，用户一进来就能点。
   - 劣势：版权与安全风险高，可信度弱。

3. wiki / guide 站
   - 优势：能吃角色词、路线词、结局词。
   - 劣势：很多内容泛化、低质、同质化明显。

### 2.3 切入点

- 做“只指向官方来源的安全导航站”
- 做“角色页 + 路线页 + 更新页”而不是单页简介
- 强调 `Unofficial`、`18+ warning`、`official source only`

## 3. 目标用户

1. 新发现玩家
   - 想知道这是什么、是否值得玩、去哪玩
   - 搜索：`the freak circus play online`, `what is the freak circus`

2. 角色向玩家
   - 想快速看 `Pierrot`、`Harlequin` 角色信息和路线差异
   - 搜索：`pierrot the freak circus`, `harlequin the freak circus`

3. 已玩玩家
   - 想看 `Day 2`、结局、隐藏内容、FAQ
   - 搜索：`the freak circus day 2`, `the freak circus endings`

主力用户：

- 新发现玩家 + 角色向玩家

## 4. 产品定位

```text
FOR 刚接触 The Freak Circus、想快速了解并安全获取官方版本的玩家
WHO 不想在非官方镜像站、零散角色页和评论区之间来回查资料
[Product Name] IS A 非官方 The Freak Circus 指南与角色导航站
THAT 帮你完成“了解 -> 官方获取 -> 角色理解 -> 路线探索 -> 更新跟踪”
UNLIKE 只会塞 iframe 的镜像站
[Product Name] 更可信、更清楚，也更适合长期承接角色和剧情长尾词
```

## 5. 功能范围

### P0

- 首页：作品简介、18+ 提示、官方获取入口、核心角色入口
- `/play-online`：解释“官方浏览器版在哪里”，只链向官方 itch.io
- `/characters/pierrot`
- `/characters/harlequin`
- `/guide`
- `/faq`
- `/content-warning`
- `/day-2`
- `/updates`

### P1

- `/endings`
- `/routes`
- `/characters/[other-character]`
- `/languages`：英文、葡语、中文支持说明
- `/download-help`：平台与版本解释

### P2

- 多语言镜像内容页（西语、俄语等）
- 剧情时间线
- 角色关系图
- RSS / 邮件更新提醒

## 6. NOT-DO

- 不做游戏镜像下载
- 不做站内 playable embed
- 不使用官方 Logo 作为本站主标识
- 不暗示“官方 wiki / 官方攻略”
- 不做用户评论区/论坛
- 不做泛游戏聚合站首版
- 不做以广告堆叠为核心的低质页面

## 7. 首页 IA

1. Hero
   - 标题：`The Freak Circus Guide, Characters & Official Play Help`
   - 副标题：明确 `Unofficial` + `18+ Psychological Horror VN`
   - 主 CTA：`Read the Guide`
   - 次 CTA：`Open Official Game Page`

2. Safety / Official Access
   - 只从官方页面获取
   - 不点可疑镜像
   - 18+ 内容提醒

3. Quick Facts
   - 作者：Garula
   - 状态：Prototype
   - 平台：官方已公开 browser play，后续更新提到 PC / mobile / browser
   - 语言：English / Portuguese (Brazil) / Chinese

4. Character Hub
   - Pierrot
   - Harlequin
   - 其他角色入口

5. Day 2 / Update Status
   - 当前更新状态
   - 新内容概览
   - 链到官方 devlog

6. Beginner Guide
   - 适合谁玩
   - 内容基调
   - 上手顺序建议

7. FAQ
   - 有官方浏览器版吗？
   - 是免费的吗？
   - 有哪些语言？
   - Day 2 到哪里看？
   - 有内容警告吗？

8. Footer
   - 非官方声明
   - 指向官方链接
   - 隐私 / 免责声明

## 8. SEO 页面矩阵

| 页面 | 目标词 | 目的 | 优先级 |
|---|---|---|---|
| `/` | the freak circus | 主词承接 | P0 |
| `/play-online` | the freak circus play online | 强意图导航 | P0 |
| `/guide` | the freak circus guide | 上手流量 | P0 |
| `/faq` | the freak circus faq | 问答流量 | P0 |
| `/content-warning` | the freak circus content warning | 安全/长尾 | P0 |
| `/day-2` | the freak circus day 2 | 更新词 | P0 |
| `/characters/pierrot` | pierrot the freak circus | 角色词 | P0 |
| `/characters/harlequin` | harlequin the freak circus | 角色词 | P0 |
| `/endings` | the freak circus endings | 剧情词 | P1 |
| `/routes` | the freak circus routes | 攻略词 | P1 |
| `/updates` | the freak circus update | 跟踪词 | P1 |
| `/languages` | the freak circus chinese / portuguese | 本地化词 | P2 |

## 9. 域名建议

这个词是明确的作品名/IP，不建议直接把它当你的长期主品牌。

### 最稳方案

- 中性主品牌 + 子目录
- `darkvnguide.com/the-freak-circus`
- `yanderevnhub.com/the-freak-circus`
- `obsessionrouteguide.com/the-freak-circus`

### 可测试方案

- `freakcircusguide.com`
- `freakcircuswiki.com`
- `thefreakcircusguide.com`

### 不建议

- `thefreakcircusofficial.com`
- `playthefreakcircus.com`
- `thefreakcircusdownload.com`

推荐顺序：

1. 中性品牌域名 + `/the-freak-circus`
2. `freakcircusguide.com`
3. `freakcircuswiki.com`

## 10. 商业化判断

- 这个词不适合当强商业词。
- 更现实的模式：
  - 轻广告
  - 低成本 SEO 测试
  - 角色页与更新页吃自然流量
- 推断：由于题材是 18+ 成人向，主流广告与 affiliate 空间会比普通游戏词更弱。
- 结论：适合做流量实验，不适合预期高商业回报。

## 11. 最终建议

- 最合理的产品形态：非官方安全导航 + 角色路线 hub
- 最不该做的形态：镜像播放站 / 伪官方站
- 最值得优先做的页面：
  - 首页
  - `/play-online`
  - `/characters/pierrot`
  - `/characters/harlequin`
  - `/day-2`
  - `/faq`

## 12. 参考来源

- 官方作者页：<https://garula.itch.io/>
- 官方 devlog / 状态页：<https://garula.itch.io/the-freak-circus/devlog/1114899/last-devlog-before-the-update-i-hope>
- itch.io 榜单与评分迹象：<https://itch.io/games/top-rated/prototypes>、<https://itch.io/games/top-rated/prototypes/tag-horror>
- 典型非官方竞品：<https://freak-circus.net/en>、<https://thefreakcircus.my/>
