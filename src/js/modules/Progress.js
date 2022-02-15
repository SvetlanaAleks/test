const Progress = (function () {
  "use strict";
  const step = $(".js-step");
  const progressCount = $(".js-step-all");
  const progressCountCurrent = $(".js-step-current");
  const progress = $(".js-progress");
  const questions = $(".js-question");
  const btnTest = $(".js-btn-text");
  const steps = step.length;
  const loaderResult = $(".js-loader-result");
  const loaderPercent = $(".js-loader-percent");
  const result = $(".js-result");

  let count = 1;
  return {
    initTest: function () {
      $(".js-start-test").click(function (e) {
        e.preventDefault();
        $("#main").hide();
        $("#steps").show();
        const firstStepCount = btnTest.data("show");
        const firstStep = $(`.js-step[data-step="${firstStepCount}"]`);
        firstStep.addClass("active");
        progressCount.text(steps);
        progressCountCurrent.text(firstStepCount);
        Progress.showProgress(firstStepCount, steps);
      });
    },
    showProgress: function (activeStep, steps) {
      progress.css({
        width: `${(activeStep * 100) / steps}%`,
      });
    },
    choiceQuestion: function () {
      questions.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const parent = _this.parents(".js-step");
        parent.find(questions).removeClass("active");
        _this.addClass("active");
        Progress.checkActiveBtn(parent);
      });
    },
    checkActiveBtn: function (parent) {
      const choiceQuestion = parent.find(questions).hasClass("active");
      if (choiceQuestion) {
        btnTest.prop("disabled", false);
      }
    },
    changeInputYear: function () {
      const inputYear = step.find(".js-input-year");
      if (!inputYear) return;
      inputYear.on("input", function () {
        let valueInput = $(this).val();
        if (valueInput >= 18 && valueInput <= 100) {
          btnTest.prop("disabled", false);
          $(".js-error-year").hide();
        } else {
          btnTest.prop("disabled", true);
          $(".js-error-year").show();
        }
      });
    },
    updCurrentStep: function () {
      btnTest.click(function (e) {
        e.preventDefault();
        count++;
        let nextStep = count;

        btnTest.attr("data-show", nextStep);
        btnTest.prop("disabled", true);
        progressCountCurrent.text(nextStep);
        Progress.showActiveStep(nextStep);
        Progress.showProgress(nextStep, steps);
        if (count > steps) {
          $("#steps").hide();
          loaderResult.addClass("active");
          Progress.showProgressLoaderResult();
        }
      });
    },
    showActiveStep: function (activeStep) {
      const currentStep = $(`.js-step[data-step="${activeStep}"]`);
      step.removeClass("active");
      currentStep.addClass("active");
    },
    showProgressLoaderResult: function () {
      $({ numberValue: 0 }).animate(
        { numberValue: 100 },
        {
          duration: 4000, // Продолжительность анимации
          easing: "linear",

          step: function (val) {
            loaderPercent.html(Math.ceil(val) + "%"); // Блок, где необходимо сделать анимацию
          },
          complete: function () {
            setTimeout(() => {
              loaderResult.removeClass("active");
              result.addClass("active");
            }, 500);
          },
        }
      );
    },
    init: function () {
      Progress.initTest();
      Progress.choiceQuestion();
      Progress.updCurrentStep();
      Progress.changeInputYear();
    },
  };
})();

export default Progress;
