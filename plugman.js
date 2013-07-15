define(['woodman'], function (woodman) {
  return function (runtime, params, callback) {
    var logger = woodman.getLogger('add-on tap-to-scroll plugman');
    logger.log('started');

    /**
     * Invoke plugman.install on the android or xcode project
     *
     * @function
     * @param {function} cb Callback
     */
    function plugmanInstall(cb) {
      runtime.plugmanInstall('./cordova-statusTap', function (err) {
        if (err) {
          logger.error('plugmanInstall error', err);
        } else {
          logger.log('we DONE');
        }

        cb(err);
      });
    }

    plugmanInstall(callback);
  };
});