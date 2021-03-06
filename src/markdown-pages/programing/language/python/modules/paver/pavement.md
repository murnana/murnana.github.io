---
title: Pavement.pyの中身
---

# このファイルは？

タスクを読み込むエントリポイントのようなもの。
ファイル名、位置はルートディレクトリに置く。

※マルチバイトのコメントを打つと怒りだします 　なぜだ...

# 一例

```{.python}
"""
Sphinxドキュメントを生成するタスク
通常、Paverのdoctoolsを使うのだが、このプロジェクトの構造に合わせたいので作成
"""

import shutil, sphinx.cmd.build, sphinx.ext.apidoc
from paver.easy import dry, task, needs
from pathlib import Path

_sphinx_path = 'sphinx'
_doctree_path = 'sphinx/__doctree__'
_api_reSt_path = Path('sphinx', 'docs', '_modules')
_module_path = Path('src')
_docs_path = 'docs'

def create_apidoc(option):
    """
    APIドキュメントの作成

        :param list[str] option: sphinx-apidocオプション

    """
    sphinx.ext.apidoc.main(option)



def build(option):
    """
    reStructuredTextからSphinxによるビルド

        :param list[str] option: sphinx-buildオプション

    """
    sphinx.cmd.build.main(option)



def clear(dir):
    """
    ディレクトリごと削除
        :param str dir:ディレクトリ
    """
    if(Path(dir).exists()):
        print('%s is delete...' % dir)
        shutil.rmtree(dir)
        print('%s is done delete!' % dir)


def get_dirlist(path):
    list = [p for p in path.iterdir() if p.is_dir()]
    for p in list:
        list += get_dirlist(p)
    return [p for p in list if p != None]


@task
def cleanup_docs():
    clear(_api_reSt_path)
    clear(_doctree_path)
    clear(_docs_path)


@task
def create_docs():
    """
    ドキュメント生成

        :param list[str] option: sphinx-buildオプション

    """
    for p in get_dirlist(_module_path):
        if(p.name == '__pycache__'): continue
        relative = p.relative_to(_module_path)
        input_path = str(p)
        out_path = str(_api_reSt_path.joinpath(relative))
        # print(input_path)
        # print(out_path)
        create_apidoc(['-f', '--follow-links', '-o', out_path, input_path])

    build(['-b', 'html', '-d', _doctree_path, _sphinx_path, _docs_path])

@task
def recreate_docs():
    cleanup_docs()
    create_docs()
```

```{.python}
"""
Paver Setup
"""
import os, sys
from paver.easy import options
from paver.setuputils import setup

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('../task'))

options(
    setup=dict(
        name='study-with-python',
        packages=[],
        version='0.0.0',
        url='https://github.com/murnana/study-with-python/',
        install_requires=['paver','pipenv']
    )
)

from task import create_doc
```

# タスクの基本

定義するには `@task` を使用します

```{.python}
from paver.easy import task

@task
def sample_task():
    print('さんぷる')
```

この場合は、 `sample_task` という名前のタスクになります

# 依存タスク

自分より前に実行されなければならないタスクがある場合は `@needs`
を使います

```{.python}
from paver.easy import task, needs

@task
@needs(['sample_prev_task'])
def sample_task():
    print('さんぷる')
```

# 実行方法

コマンドラインもしくはターミナルに

```{.bat}
paver sample_prev_task
```

と書くだけ

# 参考

- [徹底的に pavement.py --- Paver v1.0.1
  documentation](https://paver.github.io/paver-docs-jp/pavement.html)
