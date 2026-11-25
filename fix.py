p="src/Home.tsx"
s=open(p,encoding="utf-8").read()
s=s.replace('import RevealWatcher from "./RevealWatcher"`nimport ParallaxWatcher from "./ParallaxWatcher"','import RevealWatcher from "./RevealWatcher"\nimport ParallaxWatcher from "./ParallaxWatcher"')
s=s.replace('<RevealWatcher />`n      <ParallaxWatcher />','<RevealWatcher />\n      <ParallaxWatcher />')
s=s.replace('import RevealWatcher from "./RevealWatcher"\\nimport ParallaxWatcher from "./ParallaxWatcher"','import RevealWatcher from "./RevealWatcher"\nimport ParallaxWatcher from "./ParallaxWatcher"')
s=s.replace('<RevealWatcher />\\n      <ParallaxWatcher />','<RevealWatcher />\n      <ParallaxWatcher />')
open(p,"w",encoding="utf-8").write(s)
print("done")
