import json


categories = [
    "Communities & Subreddits",
    "Frameworks, Languages & Libraries",
    "Component Libraries & Styling",
    "Tooling",
    "Machine Learning",
    "Conferences",
    "Other",
    "",
]


discords = []

current_category = 0

with open("raw.txt", "r") as f:
    lines = f.readlines()

    for line in lines:
        if line.strip() == "#":
            current_category += 1
            continue

        if line.strip() == "":
            continue

        split = line.split("|")

        name = split[1].strip()
        md_link = split[2].strip()

        parsed_link = md_link.split("(")[1].split(")")[0]

        description = split[3].strip()

        discords.append(
            {
                "name": name,
                "link": parsed_link,
                "description": description,
                "category": categories[current_category],
            }
        )

with open("discords.json", "w") as f:
    json.dump(discords, f, indent=2)

print(f"Parsed {len(discords)} Discords (raw.txt -> discords.json)")
