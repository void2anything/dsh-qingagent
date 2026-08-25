// 构建后把裁剪版 drawio 离线资产拷进 lib/drawio——npm/github 安装的 tarball 不含
// vendor submodule 内容,不随包携带就会线上 404(「离线编辑器加载中」卡死)。
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const src = resolve('vendor/qingagent/apps/web/public/drawio')
const dest = resolve('lib/drawio')
if (!existsSync(src)) {
  if (existsSync(dest)) {
    console.log('[copy-drawio] vendor 缺席但 lib/drawio 已存在,保持现状')
    process.exit(0)
  }
  console.error('[copy-drawio] vendor/qingagent submodule 未初始化且 lib/drawio 缺失,drawio 资产无来源')
  process.exit(1)
}
cpSync(src, dest, { recursive: true })
console.log('[copy-drawio] drawio 资产已拷贝到 lib/drawio')
