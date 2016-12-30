# Code quality tools installation

## Check Style
#### Check style plugin for eclipse
1. Follow the instructions here for [Checkstyle installation](http://www.concretepage.com/ide/eclipse/install-checkstyle-plugin-in-eclipse)
2. Follow the instructions here for [Creating a new custom checkstyle configuration in eclipse](http://eclipse-cs.sourceforge.net/#!/custom-config). Please find the custom checkstyle configuration at `bbm-consumer/service-catalogs/bbmuser/resources/code-quality-tools/checkstyle.xml`
3. Follow the instruction here to [for setting up the checkstyle against a project](http://eclipse-cs.sourceforge.net/#!/project-setup)

#### Activating check style plugin for individual modules
> Currently check style plugin is activated only for `bbmuser-consumer-test-suite` module which is under `bbm-consumer/service-catalogs/bbmuser/bbmuser-consumer`. In order to activate the plugin for other module, all you need to do is add the below property in the pom.xml `<checkStylePhase>validate</checkStylePhase>`

#### Using checkstyle plugin through a maven profile
> We have incorporated the check style plugin in BUS using a profile `code-quality-check-dev` defined in pom.xml of `bbm-consumer/service-catalogs/bbmuser`. 
Once a module is activated to use checkstyle plugin(How? mentioned in the above section), you can check if the plugin is validating that module by using this command `mvn clean install -Pcode-quality-checks-dev`.
