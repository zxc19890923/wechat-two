1. 创建目录的时候，如果创建了.json文件报错
VM2648:2 pages/form/index.json
Expecting 'STRING','NUMBER','NULL','TRUE','FALSE','{','[', got EOF
    | ^
    
 因为文件为空没有写任何代码，添加两个{}就好了，说明他是一个对象，json文件。
 
2. 注意form中的字段必须有name值，获取表单提交的数据都是对象形式，name值是key，值是value
<form bindsubmit="formSubmit" bindreset="formReset">
        <view class="section__title">
            <label>单选框</label>
            <radio-group name="sex">
                <label><radio value="male" checked/>男</label>
                <label><radio value="famale"/>女</label>
            </radio-group>
        </view>
    <view>
        <label>复选框</label>
        <checkbox-group name="books">
            <checkbox name="book" value="html">html</checkbox>
            <checkbox name="book" value="jquery" checked>jquery</checkbox>
            <checkbox name="book" value="angular">angular</checkbox>
            <checkbox name="book" value="react">react</checkbox>
        </checkbox-group>
    </view>
  <view>
    <button formType="submit">Submit</button>
    <button formType="reset">Reset</button>
  </view>
</form>
提交按钮，获取值形式： {"sex": "male", "books": ["jquery"]}
