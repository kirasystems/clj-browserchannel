(ns tasks.browser-repl
  (require [cljs.repl :as repl])
  (require [cljs.repl.browser :as browser]))

(defn -main []
  (repl/repl (browser/repl-env)))
