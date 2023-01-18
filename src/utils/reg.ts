/**
 * 数字
 */
export const num = /^[0-9]*$/
/**
 * n位的数字
 */
export const nNum = /^\d{n}$/
/**
 * 至少n位的数字
 */
export const nnNum = /^\d{n,}$/
/**
 * m-n位的数字
 */
export const mnNum = /^\d{m,n}$/
/**
 * 零和非零开头的数字
 */
export const normalNum = /^(0|[1-9][0-9]*)$/
/**
 * 非零开头的最多带两位小数的数字
 */
export const normalFixedTwoNum = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/
/**
 * 带1-2位小数的正数或负数
 */
export const numFixedOneOrTwo = /^(-)?\d+(\.\d{1,2})?$/
/**
 * 非零的正整数
 */
export const positiveIntNum = /^[1-9]\d*$/
/**
 * 非零的负整数
 */
export const negativeIntNum = /^-[1-9]0-9"*$/
/**
 * 非负整数
 */
export const gtOrEq0Int = /^\d+$/
/**
 * 非正整数
 */
export const ltOrEq0Int = /^-[1-9]\d*|0$/
/**
 * 非负浮点数
 */
export const gtOrEq0Float = /^\d+(\.\d+)?$/
/**
 * 非正浮点数
 */
const ltOrEq0Float = /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/
/**
 * 正浮点数
 */
export const gt0Float = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
/**
 * 负浮点数
 */
export const lt0Float = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/
/**
 * 浮点数
 */
export const floatNum = /^(-?\d+)(\.\d+)?$/
/**
 * 汉字
 */
export const chineseChar = /^[\u4e00-\u9fa5]{0,}$/
/**
 * 英文和数字
 */
export const enOrNum = /^[A-Za-z0-9]+$$/
/**
 * 由26个英文字母组成的字符串
 */
export const En = /^[A-Za-z]+$/
/**
 * 由26个大写英文字母组成的字符串
 */
export const EN = /^[A-Z]+$/
/**
 * 由26个小写英文字母组成的字符串
 */
export const en = /^[a-z]+$/
/**
 * 由数字和26个英文字母组成的字符串
 */
export const EnAndNum = /^[A-Za-z0-9]+$/
/**
 * 由数字、26个英文字母或者下划线组成的字符串
 */
export const numEnChar = /^\w+$/
/**
 * 中文、英文、数字包括下划线
 */
export const numEnChineseChar = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
/**
 * 中文、英文、数字但不包括下划线等符号
 */
export const numEnChinese = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
/**
 * Email地址
 */
export const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
/**
 * 域名
 */
export const domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/
/**
 * InternetURL[a-zA-z]+://[^\s]* 或 ^http:
 */
export const url = /[a-zA-z]+:\/\/[^\s]*/
/**
 * 手机号码
 */
export const cnPhoneNumber = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
/**
 * 电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)
 */
export const abroadPhoneNumber = /^(\d{3,4}-)|(\d{3,4}-)?\d{7,8}$/
/**
 * 国内电话号码(0511-4405222、021-87888822)
 */
export const cnTelNumber = /\d{3}-\d{8}|\d{4}-\d{7}/
/**
 * 身份证号(15位、18位数字)
 */
export const cnID = /^\d{15}|\d{18}$/
/**
 * 短身份证号码(数字、字母x结尾)
 */
export const shortCnID = /^([0-9]){7,18}(x|X)?$/
/**
 * 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
 */
export const legalAccount = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
/**
 * 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
 */
export const pwd = /^[a-zA-Z]\w{5,17}$/
/**
 * 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
 */
export const strongPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
/**
 * 日期格式
 */
export const normalDate = /^\d{4}-\d{1,2}-\d{1,2}/
/**
 * 一年的12个月(01～09和1～12)
 */
export const year = /^(0?[1-9]|1[0-2])$/
/**
 * 一个月的31天(01～09和1～31)
 */
export const day = /^((0?[1-9])|((1|2)[0-9])|30|31)$/
/**
 * 钱的输入格式
 * 1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须
 */
export const money = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/

/**
 * xml文件
 */
export const xml = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/
/**
 * 中文字符的正则表达式
 */
export const cnChar = /[\u4e00-\u9fa5]/
/**
 * 双字节字符
 */
// eslint-disable-next-line no-control-regex
export const doubleByte = /[^\x00-\xff]/
/**
 * 空白行的正则表达式
 */
export const whiteSpace = /\n\s*\r/
/**
 * HTML标记的正则表达式
 */
export const html = /<(\S*?)[^>]*>.*?<\/\1>|<.*? \/>/
/**
 * 首尾空白字符的正则表达式
 */
export const frontAndEndWhiteSpace = /^\s*|\s*$/
/**
 * 腾讯QQ号
 */
export const qq = /[1-9][0-9]{4,}/
/**
 * 中国邮政编码
 */
export const cnPostCode = /[1-9]\d{5}(?!\d)/
/**
 * IP地址
 */
export const IP = /25[0-5]|2[0-4]\\d|[01]?\\d?\\d/
