import { User, Report, TeamMember, Activity } from "@/lib/definitions";

export async function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      profileImage:
        "",
    };

    setTimeout(() => resolve(user), 500);
  });
}

export async function getReports(): Promise<Report[]> {
  return new Promise((resolve) => {
    const reports: Report[] = [];

    setTimeout(() => resolve(reports), 500);
  });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return new Promise((resolve) => {
    const teamMembers: TeamMember[] = [
      {
        firstName: "Dries",
        lastName: "Vincent",
        username: "@driesvincent",
        profileImage:
          "",
      },
      {
        firstName: "Lindsay",
        lastName: "Walton",
        username: "@lindsaywalton",
        profileImage:
          "",
      },
    ];

    setTimeout(() => resolve(teamMembers), 500);
  });
}

export async function getActivities(): Promise<Activity[]> {
  return new Promise((resolve) => {
    const activities: Activity[] = [
      {
        firstName: "Dries",
        lastName: "Vincent",
        action: "COMMENT",
        ts: 1717514696008,
      },
      {
        firstName: "Whitney",
        lastName: "Francis",
        action: "COMMENT",
        ts: 1717427841000,
      },
      {
        firstName: "Floyd",
        lastName: "Miles",
        action: "ACTIVATE",
        ts: 1717340641000,
      },
      {
        firstName: "Emily",
        lastName: "Selman",
        action: "STOP",
        ts: 1717253241000,
      },
    ];

    setTimeout(() => resolve(activities), 500);
  });
}
