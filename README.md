# Next.js企业样板

欢迎来到Next.js企业样板,一个开源的企业项目模板!它集成了丰富的功能,可以帮助您构建高性能、可维护和令人愉快的应用程序。我们已经完成了所有艰苦的工作,所以请放松,准备用令人惊叹的应用程序征服世界吧!🌍

> [!注意]
> **Blazity** 是一支Next.js/无头专家团队。如果您想与我们讨论您的项目或仅仅与我们聊聊天,请联系我们[contact@blazity.com](https://blazity.com)

## 特性

使用这个模板,您可以获得所有您需要的精彩功能:

- 🏎️ **[Next.js](https://nextjs.org/)** - 默认快速,性能优化配置(带**应用程序目录**)
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的CSS框架,用于快速UI开发
- ✨ **[ESlint](https://eslint.org/)** 和 **[Prettier](https://prettier.io/)** - 编写清晰、一致和无错误的代码
- 🛠️ **[极端严格的TypeScript](https://www.typescriptlang.org/)** - 带 [`ts-reset`](https://github.com/total-typescript/ts-reset) 库实现终极类型安全
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - 预配置的操作实现流畅的工作流程,包括捆绑包大小和性能统计
- 💯 **完美的Lighthouse评分** - 因为性能很重要
- **[包分析插件](https://www.npmjs.com/package/@next/bundle-analyzer)** - 监控你的包大小
- **[Jest](https://jestjs.io/)** 和 **[React测试库](https://testing-library.com/react)** - 用于强大的单元和集成测试
- **[Playwright](https://playwright.dev/)** -像专业人士一样编写端到端测试
- **[Storybook](https://storybook.js.org/)** - 创建、测试和展示你的组件
- **烟雾测试**和**验收测试** - 确保您的部署的可信度
- **[常规提交git钩子](https://www.conventionalcommits.org/)** - 保持整洁的提交历史
- **[可观察性](https://opentelemetry.io/)** - 开放式遥测集成实现无缝监控
- **[绝对导入](https://nextjs.org/docs/advanced-features/module-path-aliases)** - 不再出现意大利面代码导入
- **[健康检查](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - 与Kubernetes兼容实现强健部署
- **[Radix UI](https://www.radix-ui.com/)** - 无头UI组件实现无限定制
- **[CVA](http://cva.style/)** - 创建一致、可重用和原子设计系统
- **[Renovate BOT](https://www.whitesourcesoftware.com/free-developer-tools/renovate)** - 自动更新依赖项,这样您可以专注于编码
- **[补丁包](https://www.npmjs.com/package/patch-package)** - 修复外部依赖项而不失明智
- **组件耦合和内聚关系图** - 一个用于管理组件关系的工具
- **[自动ChatGPT代码审查](https://openai.com/chatgpt)** - **使用AI驱动的代码审查保持领先地位!**  
- **[语义版本控制](https://github.com/semantic-release/semantic-release)** - 用于自动生成变更日志
- **[T3 Env](https://env.t3.gg/)** - 轻松管理环境变量

## 目录

- [Next.js企业样板](#nextjs-enterprise-boilerplate)
  - [特性](#features)
  - [目录](#table-of-contents)
  - [开始](#-getting-started)
  - [部署](#-deployment)
  - [脚本概览](#-scripts-overview)
  - [耦合关系图](#-coupling-graph)
  - [测试](#-testing)
    - [运行测试](#running-tests)
    - [验收测试](#acceptance-tests)
    - [烟雾测试](#smoke-testing)
  - [样式和设计系统](#-styling-and-design-system)
    - [CVA - 新型变体方法](#cva---a-new-approach-to-variants)
  - [状态管理](#-state-management)
    - [Zustand](#zustand)
    - [Jotai](#jotai)
    - [Recoil](#recoil)
  - [ChatGPT代码审查](#-chatgpt-code-review)
  - [环境变量处理](#-environment-variables-handling)
  - [贡献](#-contribution)
  - [支持](#support)
  - [许可证](#-license)
  - [贡献者](#contributors)

## 🎯 开始

要开始使用这个样板,请执行以下步骤:

1. 分支和克隆存储库:

```bash
## 不要忘记先给个⭐!
git clone https://github.com/<your_username)/next-enterprise.git
```

2. 安装依赖项:

```bash
yarn install --frozen-lockfile
```

3. 运行开发服务器:

```bash
yarn dev
```

4. 使用浏览器打开 [http://localhost:3000](http://localhost:3000) 查看结果。

5. 这个项目使用git钩子强制执行[常规提交](https://github.com/qoomon/git-conventional-commits)。要安装git钩子,请在项目的根目录中运行以下命令:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

## 🚀 部署

通过点击下面的按钮,可以使用 [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise) 轻松部署 Next.js 应用程序:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise)

## 📃 脚本概览

`package.json` 中提供了以下脚本:

- `dev`: 使用彩色输出启动开发服务器
- `build`: 为生产环境构建应用程序  
- `start`: 启动生产服务器
- `lint`: 使用 ESLint 对代码进行检测
- `lint:fix`: 自动修复检测到的错误
- `prettier`: 检查代码格式是否正确
- `prettier:fix`: 自动修复格式问题
- `analyze`: 分析客户端、服务器和边缘环境的包大小
- `storybook`: 启动 Storybook 服务器
- `build-storybook`: 构建 Storybook 用于部署
- `test`: 运行单元和集成测试
- `e2e:headless`: 在无头模式下运行端到端测试
- `e2e:ui`: 运行带UI的端到端测试
- `format`: 使用 Prettier 格式化代码
- `postinstall`: 对外部依赖项应用补丁
- `preinstall`: 确保使用 Yarn 安装项目
- `coupling-graph`: 生成组件的耦合和内聚关系图

## 🔗 耦合关系图

`coupling-graph` 脚本是一个有用的工具,可帮助可视化项目内部模块之间的耦合和连接。它使用 [Madge](https://github.com/pahen/madge) 库构建。要生成关系图,请运行以下命令:

```bash
yarn coupling-graph
```

这将创建一个 `graph.svg` 文件,其中包含组件之间连接的图形表示。您可以使用任何兼容 SVG 的查看器打开该文件。

![graph](https://user-images.githubusercontent.com/28964599/233662744-3ba89713-8466-49cd-9be7-e6fb38191f58.png)

## 🧪 测试

该样板提供了各种测试设置,以确保应用程序的可靠性和健壮性。

### 运行测试

- **单元和集成测试**: 使用 `yarn test` 运行 Jest 测试
- **端到端测试(无头模式)**: 使用 `yarn e2e:headless` 在无头模式下运行 Playwright 测试
- **端到端测试(UI 模式)**: 使用 `yarn e2e:ui` 在 UI 模式下运行 Playwright 测试

<img width="1392" alt="image" src="https://user-images.githubusercontent.com/28964599/233666655-93b7d08b-2fd8-406a-b43c-44d4d96cf387.png">

### 验收测试

要编写验收测试,我们利用 Storybook 的 [`play` 函数](https://storybook.js.org/docs/react/writing-stories/play-function#writing-stories-with-the-play-function)。这允许您在 Storybook 中与组件交互并测试各种用户流。

```ts
/*
 * 参见 https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas 
 * 了解有关使用 canvasElement 查询 DOM 的更多信息
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText("email", {
      selector: "input",
    })

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    })

    const passwordInput = canvas.getByLabelText("password", {
      selector: "input",
    })

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    })
    // 参见 https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args 了解如何在Actions面板中设置日志记录
    const submitButton = canvas.getByRole("button")

    await userEvent.click(submitButton)
  },
}
```

### 烟雾测试

在这个样板中,我们利用 Storybook 开箱即用的烟雾测试支持来验证组件是否渲染正确,没有任何错误。只需运行 `yarn test-storybook` 执行烟雾测试。请记住,只使用 JSX 或 TSX 格式编写故事。烟雾测试和许多其他功能与 MDX 故事配合得不好。

## 🎨 样式和设计系统

该样板使用 Tailwind CSS 进行样式设置,使用 CVA 创建强大且易于使用的设计系统。如果您想了解更多关于设置的信息,请观看 Vercel 的这段精彩视频:

[![Styling and Design System](https://img.youtube.com/vi/T-Zv73yZ_QI/0.jpg)](https://www.youtube.com/watch?v=T-Zv73yZ_QI&ab_channel=Vercel)

### CVA - 新型变体方法

尽管像 [Stitches](https://stitches.dev/) 和 [Vanilla Extract](https://vanilla-extract.style/) 这样的 CSS-in-TS 库很好地构建了类型安全的 UI 组件,但它们可能不是每个人的完美选择。您可能更喜欢对样式表具有更多控制权,需要使用 Tailwind CSS 等框架,或者简单地喜欢编写自己的 CSS。

使用传统的 CSS 创建变体可能是一项乏味的任务,需要您手动匹配类与 props,并添加类型。CVA 在此释放您的痛苦,让您可以专注于 UI 开发的乐趣部分。通过提供一种简单且类型安全的方式来创建变体,CVA 简化了该过程,并帮助您在不损失 CSS 的灵活性和控制力的情况下创建强大的设计系统。

## 💾 状态管理

虽然这个样板没有包含具体的状态管理库,但我们认为您选择最适合项目需求的状态管理库非常重要。这里是我们推荐用于状态管理的一些库:

### Zustand

[Zustand](https://github.com/pmndrs/zustand)是一个小巧、快速且可扩展的状态管理库。它的设计简单直观,非常适合中小型项目。它还优化了包大小,确保对您的应用程序性能影响最小。

### Jotai

[Jotai](https://github.com/pmndrs/jotai)是一个关注提供最小和简单API的React原子状态管理库。它的原子方法允许您以细粒度的方式管理状态,同时仍然高度优化包大小。

### Recoil

[Recoil](https://recoiljs.org/)是一个由Facebook开发的状态管理库,专为React应用程序设计。通过使用原子和选择器,Recoil可以有效地管理状态和派生状态。其关键好处是只更新订阅的状态发生变化的组件,减少不必要的重新渲染,使您的应用程序保持快速和高效。Recoil还提供了内置的调试工具,具有出色的开发者体验。

选择最适合您的要求和项目结构的库,为您的应用程序提供高效的状态管理解决方案。

## 🤖 ChatGPT代码审查

我们集成了创新的 [ChatGPT代码审查](https://github.com/anc95/ChatGPT-CodeReview) 进行AI驱动的自动代码审查。此功能为您的代码提供实时反馈,帮助改进代码质量并发现潜在问题。 

要使用 ChatGPT 代码审查,请添加一个`OPENAI_API_KEY`环境变量,并使用OpenAI平台中的适当键。有关设置详细信息,请参阅文档中的[使用 GitHub 操作](https://github.com/anc95/ChatGPT-CodeReview#using-github-actions)部分。

![image](https://user-images.githubusercontent.com/28964599/233685071-e1371edf-6359-41c3-a989-335d6ee09cb7.png)

## 💻 环境变量处理

[T3 Env](https://env.t3.gg/)是一个在构建时提供环境变量检查、类型验证和转换的库。它确保您的应用程序使用正确的环境变量以及它们的值为预期类型。您将不再为不正确的环境变量使用导致的运行时错误所困扰。

配置文件位于 `env.mjs`。只需设置客户端和服务器变量,然后从项目中的任何文件导入 `env`。

```ts
export const env = createEnv({
  server: {
    // 服务器变量
    SECRET_KEY: z.string(),
  },
  client: {
    // 客户端变量
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})

如果未设置所需的环境变量,将显示错误消息:

```sh
  ❌ 无效的环境变量:{ SECRET_KEY: [ '必填' ] }
```

## 🤝 贡献

欢迎贡献!要贡献,请执行以下步骤:

1. 分支存储库。
2. 使用描述性名称创建新分支。
3. 进行更改,并使用 [常规提交](https://www.conventionalcommits.org/) 格式提交。
4. 将更改推送到分支存储库。  
5. 创建拉取请求,我们将审查您的更改。

## 支持

如果您需要帮助或者只是想分享对这个项目的看法,我们鼓励您加入我们的Discord社区。这里是链接:[https://blazity.com/discord](https://blazity.com/discord)。这是一个交流思想和互相帮助的空间。我们欢迎每个人的贡献和意见。

<br />
<a href="https://discord.gg/fyWtyNKmfX" style="width: 100%; display: flex; justify-content: center;">
  <img src="https://discordapp.com/api/guilds/1111676875782234175/widget.png?style=banner2" alt="Blazity Discord Banner"/>
</a>
<br />


## 📜 许可证

该项目使用 MIT 许可证授权。更多信息请参阅 [LICENSE](./LICENSE) 文件。

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://bstefanski.com/"><img src="https://avatars.githubusercontent.com/u/28964599?v=4?s=100" width="100px;" alt="Bart Stefanski"/><br /><sub><b>Bart Stefanski</b></sub></a><br /><a href="https://github.com/Blazity/next-enterprise/commits?author=bmstefanski" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jjablonski-it"><img src="https://avatars.githubusercontent.com/u/51968772?v=4?s=100" width="100px;" alt="Jakub Jabłoński"/><br /><sub><b>Jakub Jabłoński</b></sub></a><br /><a href="#infra-jjablonski-it" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://neg4n.dev/"><img src="https://avatars.githubusercontent.com/u/57688858?v=4?s=100" width="100px;" alt="Igor Klepacki"/><br /><sub><b>Igor Klepacki</b></sub></a><br /><a href="https://github.com/Blazity/next-enterprise/commits?author=neg4n" title="Documentation">📖</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- Badges and links -->

[check-workflow-badge]: https://img.shields.io/github/actions/workflow/status/blazity/next-enterprise/check.yml?label=check
[github-license-badge]: https://img.shields.io/github/license/blazity/next-enterprise?link=https%3A%2F%2Fgithub.com%2FBlazity%2Fnext-enterprise%2Fblob%2Fmain%2FLICENSE
[github-contributors-badge]: https://img.shields.io/github/contributors/blazity/next-enterprise?link=https%3A%2F%2Fgithub.com%2FBlazity%2Fnext-enterprise%2Fgraphs%2Fcontributors
[discord-badge]: https://img.shields.io/discord/1111676875782234175?color=7b8dcd&link=https%3A%2F%2Fblazity.com%2Fdiscord
[made-by-blazity-badge]: https://img.shields.io/badge/made_by-Blazity-blue?color=FF782B&link=https://blazity.com/

[check-workflow-badge-link]: https://github.com/Blazity/next-enterprise/actions/workflows/check.yml
[github-license-badge-link]: https://github.com/Blazity/next-enterprise/blob/main/LICENSE
[github-contributors-badge-link]: https://github.com/Blazity/next-enterprise/graphs/contributors
[discord-badge-link]: https://blazity.com/discord
[made-by-blazity-badge-link]: https://blazity.com/?utm_source=nextenterprise&utm_medium=github
