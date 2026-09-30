# Dyna's Taku robot takes on the laundry room, beyond folding a towel

By Rodolfo Garcia Calderoni, CFA

Draft for selection, September 30, 2026. Approximately 5 minutes.

Dyna introduced its Taku robot and Dyna 2.1 system on September 29, presenting an hour-long, uncut hotel laundry demonstration intended to show a robot carrying out a workflow rather than one isolated task. [Dyna research release](https://www.dyna.co/dyna-2.1)

The company describes a mobile manipulation system that combines a wheeled robot, learned physical skills and a model that decides what work comes next. The report and demonstration are company evidence. Black Scarab has not independently reproduced the run, verified the absence of every form of assistance or established a commercial deployment success rate for this new system.

The interesting development is the scope of the job. Folding a towel can look impressive while leaving a person responsible for everything on either side. A laundry room asks a robot to move between stations, handle changing conditions and keep the process moving when something goes wrong.

## At a glance

* Dyna's September 29 release introduces Taku and its Dyna 2.1 control system.
* The company presents an hour-long laundry workflow demonstration as its central example.
* The release provides a technical explanation, but a demonstration is not evidence of reliable operation across full shifts and different customer sites.

## The work between the tasks

A laundry process contains useful automation targets that are easy to overlook in a short robot video. A machine finishes while another task is underway. A shelf becomes occupied. A load has to move between places. An object falls and changes what must happen next.

The business process does not pause neatly at the boundary of each skill. A robot might perform a manipulation successfully and still fail to make the room more productive if it waits at the wrong station or needs a person to prepare every next step.

That is the distinction Dyna is trying to address. The demonstration's value is less about a single photogenic movement and more about whether the system can keep a chain of work connected. For readers assessing progress, transitions and recovery deserve as much attention as the cleanest grasp.

## A body designed around reach

Taku has a human-shaped upper body, a folding lower structure, four steerable wheels and two arms with seven degrees of freedom each, according to Dyna. The company says it chose wheels because its target workflows need mobility and reaching more than legs. [Taku hardware description](https://www.dyna.co/dyna-2.1#meet-taku)

That choice puts the application ahead of the silhouette. Different stations place work at different heights and depths. A useful machine needs to position its body so its hands can reach the object and still complete the motion without obstructing itself.

Wheels introduce their own operating requirements. A demonstration in one room does not tell a reader how the system handles another floor, a tighter aisle, a blocked route or a different machine door. The relevant test is whether the intended sites actually fit the robot's operating envelope.

There is no reason to insist that every robot serving a human workspace must reproduce a person's entire body. There is a reason to ask which work its chosen structure can perform and which work remains outside its reach.

## Three layers share the job

Dyna describes three control layers. A whole-body controller translates target movements into joint and wheel commands. Its DYNA 2 policy produces those target movements for a skill. A vision-language model serves as the workflow orchestrator, tracking the process and choosing the next step. [System architecture](https://www.dyna.co/dyna-2.1#the-physical-agent)

This division reflects different kinds of decisions. Keeping a movement coordinated is different from deciding whether to interrupt folding because a machine has finished. It is also different from remembering which load went into which machine.

The architecture is a useful explanation of how the company intends to connect those decisions. It is not a guarantee that each layer will supply the right answer in a new situation. The important evidence is how errors travel between layers and whether the system detects them before the workflow deteriorates.

A planner can choose a sensible next task while a physical skill fails. A skill can execute precisely while the planner has misunderstood the state of the room. Sustained autonomy depends on handling both kinds of mistake, including cases in which the system should stop and ask for help.

## Recovery makes the difference

Longer workflows accumulate opportunities for failure. Even a strong individual skill can produce a fragile process if it has to succeed repeatedly without correction. As an illustrative calculation, 100 independent steps with a 99 percent success probability each have about a 37 percent chance of all succeeding. Real errors are not necessarily independent, and this is not a measurement of Taku.

The calculation explains why recovery deserves separate treatment. A small error that is detected and corrected can cost time without ending the entire run. An unnoticed error may contaminate later decisions and make the eventual interruption harder to diagnose.

That suggests a more useful way to evaluate a demonstration: count the recoveries as well as the successful cycles. How long did the system spend restoring a usable state? Did it recognize the problem itself? Was any item handled incorrectly despite the process continuing?

An uncut presentation gives viewers more opportunity to examine continuity than a highlight reel. It still leaves the need for repeated runs and disclosed evaluation conditions.

## A room is not yet a rollout

The new release does not, by itself, establish a fleet-level success rate, customer economics or general performance across varied laundry facilities. Hardware price, service terms, rollout timing and the responsibilities that remain with staff need confirmation before a purchasing decision.

Dyna discusses earlier stationary task work alongside the new system. Readers should keep those categories separate. Evidence about a previous folding installation does not automatically establish the reliability of a mobile robot managing the surrounding workflow.

[Humanoids Daily’s September 29 coverage](https://www.humanoidsdaily.com/news/dyna-taku-dyna-2-1-autonomous-laundry) likewise distinguishes the demonstration from customer deployment. It reports the release; it does not independently validate the robot’s performance.

The next evaluation should include the hours of human attention required, useful throughput, rejected or reprocessed items and time spent recovering. A robot that stays busy is not necessarily a robot that improves the process. Results need a comparable baseline and a clear definition of the job handed over.

## What to watch next

Look for repeated runs in different rooms, independent observation and transparent intervention records. A longer demonstration becomes more informative when it includes ordinary variation rather than simply extending a familiar setup.

The strongest commercial signal would be customers returning with evidence that the robot reduced total work required to complete the process. That would connect physical capability, workflow reasoning and practical value.

Taku is a fresh attempt to move the unit of robot autonomy from a task to a job. Dyna has made the claim concrete enough to inspect. Whether it survives the messiness of routine operations is the next question.
