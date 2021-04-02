/**
 * 自定义Model
 */
interface UseModel {
  (props: { onChange: OnChange }): infer R;
}

/**
 * 自定义model在setState调的辅助函数
 */
interface OnChange {
  (key: string, value: any): void;
}

/**
 * createModel返回的函数
 */
interface ModelHandler<R> {
  // (params?: { props?: any, keys?: (keyof R)[] }): R;
  (props?: any): R;
  data?: R,
  clear?: () => void;
  onStateChange?: (callback: OnChange, deps?: string[]) => void;
}

/**
 * model包装器
 * @param fn
 * @returns
 */
declare function createModel(useModel: UseModel): ModelHandler<ReturnType<UseModel>>;

export { createModel };
