1. 创建目录的时候，如果创建了.json文件报错
VM2648:2 pages/form/index.json
Expecting 'STRING','NUMBER','NULL','TRUE','FALSE','{','[', got EOF
    | ^
    
 因为文件为空没有写任何代码，添加两个{}就好了，说明他是一个对象，json文件。
