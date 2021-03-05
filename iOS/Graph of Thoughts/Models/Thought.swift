//
//  Thought.swift
//  Graph of Thoughts
//
//  Created by Vincent on 3/5/21.
//

import Foundation

public struct Thought: Codable, Identifiable {
    public var id: Int
    public var title: String
    public var body: String
    public var imageURL: String?
    public var user: User?
}
