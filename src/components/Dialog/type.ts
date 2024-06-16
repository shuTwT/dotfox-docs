interface DialogProps {
    /** `Dialog` 的显示与隐藏 */
    visible?: boolean;
    /** `Dialog` 的标题 */
    title?: string;
    /** `Dialog` 的宽度，默认 `50%` */
    width?: string | number;
    /** 是否为全屏 `Dialog`（会一直处于全屏状态，除非弹框关闭），默认 `false`，`fullscreen` 和 `fullscreenIcon` 都传时只有 `fullscreen` 会生效 */
    fullscreen?: boolean;
    /** 是否显示全屏操作图标，默认 `false`，`fullscreen` 和 `fullscreenIcon` 都传时只有 `fullscreen` 会生效 */
    fullscreenIcon?: boolean;
    /** `Dialog CSS` 中的 `margin-top` 值，默认 `15vh` */
    top?: string;
    /** 是否需要遮罩层，默认 `true` */
    modal?: boolean;
    /** `Dialog` 自身是否插入至 `body` 元素上。嵌套的 `Dialog` 必须指定该属性并赋值为 `true`，默认 `false` */
    appendToBody?: boolean;
    /** 是否在 `Dialog` 出现时将 `body` 滚动锁定，默认 `true` */
    lockScroll?: boolean;
    /** `Dialog` 的自定义类名 */
    class?: string;
    /** `Dialog` 的自定义样式 */
    style?: string | object;
    /** `Dialog` 打开的延时时间，单位毫秒，默认 `0` */
    openDelay?: number;
    /** `Dialog` 关闭的延时时间，单位毫秒，默认 `0` */
    closeDelay?: number;
    /** 是否可以通过点击 `modal` 关闭 `Dialog`，默认 `true` */
    closeOnClickModal?: boolean;
    /** 是否可以通过按下 `ESC` 关闭 `Dialog`，默认 `true` */
    closeOnPressEscape?: boolean;
    /** 是否显示关闭按钮，默认 `true` */
    showClose?: boolean;
    /** 关闭前的回调，会暂停 `Dialog` 的关闭. 回调函数内执行 `done` 参数方法的时候才是真正关闭对话框的时候 */
    beforeClose?: (done: () => void) => void;
    /** 为 `Dialog` 启用可拖拽功能，默认 `false` */
    draggable?: boolean;
    /** 是否让 `Dialog` 的 `header` 和 `footer` 部分居中排列，默认 `false` */
    center?: boolean;
    /** 是否水平垂直对齐对话框，默认 `false` */
    alignCenter?: boolean;
    /** 当关闭 `Dialog` 时，销毁其中的元素，默认 `false` */
    destroyOnClose?: boolean;
}
export interface DialogOptions extends DialogProps {

}