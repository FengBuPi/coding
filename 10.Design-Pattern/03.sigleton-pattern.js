// 单例模式

class SingleCase {
  show() {
      console.log('我是一个单例对象')
  }
  static getInstance() {
      // 判断是否已经new过1个实例
      if (!SingleCase.instance) {
          // 若这个唯一的实例不存在，那么先创建它
          SingleCase.instance = new SingleCase()
      }
      // 如果这个唯一的实例已经存在，则直接返回
      return SingleCase.instance
  }
}
const s1 = SingleCase.getInstance()
const s2 = SingleCase.getInstance()
s1 === s2    // true

/**


1.单例模式的优缺点
单例模式主要解决的问题就是节约资源，保持访问一致性。
单例模式优点如下：
● 节约开支，提高性能： 单例模式在创建后在内存中只存在一个实例，节约了内存开支和实例化时的性能开支，特别是需要重复使用一个创建开销比较大的类时，比起实例不断地销毁和重新实例化，单例能节约更多资源，比如数据库连接；
● 解决资源多重占用： 单例模式可以解决对资源的多重占用，比如写文件操作时，因为只有一个实例，可以避免对一个文件进行同时操作；
● 提高系统流畅度： 只使用一个实例，也可以减小垃圾回收机制 GC（Garbage Collecation） 的压力，表现在浏览器中就是系统卡顿减少，操作更流畅，CPU 资源占用更少；
单例模式缺点如下：
● 对扩展不友好：一般不容易扩展，因为单例模式一般自行实例化，没有接口；
● 与单一职责原则冲突：一个类应该只关心内部逻辑，而不关心外面怎么样来实例化；
2. 单例模式的使用场景
单例模式的使用场景：
● 当一个类的实例化过程消耗的资源过多，可以使用单例模式来避免性能浪费；
● 当项目中需要一个公共的状态，那么需要使用单例模式来保证访问一致性；

 */