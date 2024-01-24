import re
import time
from pathlib import Path

ROOT_DIR = Path(__file__).parent
DEPLOYMENT_DIR = ROOT_DIR / "deployment"

if __name__ == "__main__":
    start = time.time()
    yaml_files = list(DEPLOYMENT_DIR.glob("**/*.yaml"))
    yaml_files += list(DEPLOYMENT_DIR.glob("**/*.yml"))
    print("fixing {} yaml files".format(len(yaml_files)))
    for yaml_file in yaml_files:
        print("fixing {}".format(yaml_file))
        with open(yaml_file, "r") as f:
            content = f.read()

        while True:
            new_content = re.sub(r"\{[ ]*\{[ ]*", "{{", content)
            new_content = re.sub(r"\}[ ]*\}[ ]*", "}}", new_content)
            if new_content == content:
                break
            content = new_content

        assert content == new_content

        with open(yaml_file, "w") as f:
            f.write(content)

    print("completed in {:4.2f} sec".format(time.time() - start))
