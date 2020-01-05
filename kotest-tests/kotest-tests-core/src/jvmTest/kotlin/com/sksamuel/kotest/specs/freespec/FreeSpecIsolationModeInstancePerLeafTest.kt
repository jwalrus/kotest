package com.sksamuel.kotest.specs.freespec

import io.kotest.core.IsolationMode
import io.kotest.specs.FreeSpec

class FreeSpecIsolationModeInstancePerLeafTest : FreeSpec() {

  companion object {
    var string = ""
  }

  override fun isolationMode() = IsolationMode.InstancePerLeaf

  //override fun afterSpecCompleted(description: Description, spec: SpecInterface) {
  //  string shouldBe "abccc_ade_"
  //}

  init {
    "a" - {
      string += "a"
      "b" - {
        string += "b"
        // since we execute this test 3 times, and we are in instance per nod,
        // the whole test should be re-executed 3 times
        "c".config(invocations = 3) {
          string += "c"
        }
      }
      "d" - {
        string += "d"
        "e" {
          string += "e"
        }
      }
      string += "_"
    }
  }
}
